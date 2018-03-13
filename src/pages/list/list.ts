import { Component, OnInit } from '@angular/core';
import { AlertController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'app-list',
    templateUrl: './list.html',
    // styleUrls: ['./list.scss']
})
export class ListPage implements OnInit {

    info: String;

    transactionList: Array<{
        id: String, code: String, Goods: { name: String },
        Business: { name: String }, User: { username: String }, state: Number, endTime: Date,
        createAt: Date
    }> = [];

    transaction: {
        id: String, code: String, Goods: { name: String }, Business: { name: String },
        User: { username: String }, state: Number, endTime: Date, createAt: Date
    };

    infoList: Array<{ validString: String, stateString: String }> = [];

    constructor(public alertCtrl: AlertController, private apollo: Apollo,
        public navParams: NavParams) { }

    ngOnInit() {
        this.info = this.navParams.get('info');
        if (this.info) {
            this.getList();
        }
    }

    showAlert(name: String, time: String, endTime: String, state: String, code: String) {
        let alert = this.alertCtrl.create({
            title: '兑换详情',
            subTitle: '商品名：' + name + '<br/>兑换时间：' + time + '<br/>过期时间：' + endTime + '<br/>状态：' + state + '<br/>兑换码：' + code,
            buttons: ['OK']
        });
        alert.present();
    }

    showDetail(id: String) {
        const sql = gql`query($id:String){
            transaction:getTransactionById(id:$id) {
              id Goods{name} createAt endTime state code     
            }}`;
        var query: any = {
            query: sql,
            variables: { id: id },
            fetchPolicy: "network-only"
        }
        type transaction = { id: String, code: String, Goods: { name: String }, Business: { name: String }, User: { username: String }, state: Number, endTime: Date, createAt: Date };
        this.apollo.query<transaction>(query).subscribe(({ data }) => {
            if (data && data['transaction']) {
                let name = data['transaction'].Goods.name;
                let time = '';
                let endTime = '';
                let state = '';                
                let code = data['transaction'].code;                
                let date = new Date(data['transaction'].createAt);
                time = date.toLocaleDateString() + date.toLocaleTimeString();
                let endDate = new Date(data['transaction'].endTime);
                endTime = endDate.toLocaleDateString() + endDate.toLocaleTimeString();
                state = this.getState(endDate, new Date(), data['transaction'].state);
                console.log('show');
                this.showAlert(name, time, endTime, state, code);
            }
        });
    }

    getList() {
        var obj = {};
        if (this.info == "未兑换") {
            let data: String = new Date().toISOString();
            obj = { state: 0, endTime: `{"$gt":"${data}"}` };
        }
        if (this.info == "已兑换") {
            obj = { state: 1 };
        }
        if (this.info == "已过期") {
            let data: String = new Date().toISOString();
            obj = {
                endTime: `{"$lt":"${data}"}`
            }
        }
        const sql = gql`
        query($pageIndex:Int,$pageSize:Int,$transaction:searchTransaction) {
            transactionList:getTransactionPage(pageSize:$pageSize,pageIndex:$pageIndex,transaction:$transaction) {
                id Goods{name} createAt endTime state
            } 
        }`;
        var query: any = {
            query: sql,
            variables: { pageIndex: 1, pageSize: 10, transaction: obj },
            fetchPolicy: "network-only"
        }

        type transaction = Array<{ id: String, code: String, Goods: { name: String }, Business: { name: String }, User: { username: String }, state: Number, endTime: Date, createAt: Date }>;
        this.apollo.query<transaction>(query).subscribe(({ data }) => {
            if (data && data['transactionList']) {
                for (let i = 0; i < data['transactionList'].length; i++) {
                    this.infoList.push({ validString: "加载中", stateString: "加载中" });
                }
                this.transactionList = data['transactionList'];
                this.dealInfoList();
            }
        });
    }

    dealInfoList() {
        var ndate = new Date();
        for (let i = 0; i < this.transactionList.length; i++) {
            let date = new Date(this.transactionList[i].endTime);
            this.infoList[i].validString = date.toLocaleDateString() + date.toLocaleTimeString();
            this.infoList[i].stateString = this.getState(date, ndate, this.transactionList[i].state);
        }
    }

    getState(date: Date, ndate: Date, state: Number, ) {
        let str = '';
        if (state == 1) {
            str = '已兑换';
            return str;
        }
        let ntime: Number = ndate.getTime();
        let time: Number = date.getTime();
        if (state == 0 && ntime > time) {
            str = '已过期';
            return str;
        }
        str = '未兑换';
        return str;
    }
}
