import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams, AlertController } from 'ionic-angular';
import { Detail } from './components/detail';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})
export class Goods implements OnInit {

  dataList: Array<String> = [];

  goods: {
    id: String, Business: { id: String, name: String, address: String },
    GoodsType: { name: String }, Images: Array<{ path: String }>,
    name: String, score: Number, ruler: String, explain: String, stock: Number,
    times: Number, validTime: Number
  } =
    {
      id: '', Business: { id: '', name: '', address: '' }, GoodsType: { name: '' },
      Images: [], name: '', score: 0, ruler: '', explain: '', stock: 0, times: 0, validTime: 0
    };

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController,
    public navParams: NavParams, private apollo: Apollo, public alertCtrl: AlertController) { }

  ngOnInit(): void {
    if (this.navParams.get('id')) {
      this.getDataList(this.navParams.get('id'));
    }
  }

  getDataList(id: any) {
    const sql = gql`
      query($id:String){
        goods:getGoodsById(id:$id ) {
          id Business{id,name,address} GoodsType{name} Images{path} name score ruler
           explain stock times validTime          
        } 
      }
    `;

    var query: any = {
      query: sql,
      variables: { id: id },
      fetchPolicy: "network-only"
    }

    type goods = {
      id: String, Business: { id: String, name: String, address: String },
      GoodsType: { name: String }, Images: Array<{ path: String }>, name: String, score: Number,
      ruler: String, explain: String, stock: Number, times: Number, validTime: Number
    };

    this.apollo.query<goods>(query).subscribe(({ data }) => {
      Object.assign(this.goods, data['goods']);
      for (let i = 0; i < this.goods.Images.length; i++) {
        this.dataList.push("http://localhost:8080/" + this.goods.Images[i].path);
      }
      this.goods.validTime = parseFloat(this.goods.validTime + '') / 86400000;
    })
  }

  toDetail() {
    this.navCtrl.push(Detail, {
      goods: this.goods
    });
  }

  showAlert(flag: Boolean) {
    let str = flag ? '兑换成功！' : '兑换失败！';
    let alert = this.alertCtrl.create({
      title: '兑换结果',
      subTitle: str,
      buttons: ['OK']
    });
    alert.present();
  }

  async doTrans() {
    if (this.goods.id != '' && this.goods.Business.id != '') {
      var id = await this.getCurrentUser();
      var result = await this.saveTransaction(this.goods.id, this.goods.Business.id, id);
      this.showAlert(result);
    }
  }

  saveTransaction(gid: String, bid: String, uid: String) {

    const sql = gql`mutation($userId:String,$businessId:String,$goodsId:String) {
      result:saveTransaction(userId:$userId,businessId:$businessId,goodsId:$goodsId)
    }`;

    var mutate: any = {
      mutation: sql,
      variables: { userId: uid, businessId: bid, goodsId: gid }
    }

    return new Promise<Boolean>((reslove, reject) => {
      this.apollo.mutate<Boolean>(mutate).subscribe(({ data }) => {
        if (!data || !data['result']) {
          reslove(false);
          return;
        }
        reslove(true);
        return;
      })
    });
  }

  getCurrentUser() {

    const sql = gql`query{
        user:currentUser {
          id
        }
      }`;

    var query: any = {
      query: sql,
      fetchPolicy: "network-only"
    }

    return new Promise<String>((reslove, reject) => {
      this.apollo.query<{ id: String }>(query).subscribe(({ data }) => {
        if (!data || !data['user']) {
          reslove(null);
          return;
        }
        reslove(data['user'].id);
        return;
      })
    });
  }
}
