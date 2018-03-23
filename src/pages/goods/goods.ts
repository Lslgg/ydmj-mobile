import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams, AlertController } from 'ionic-angular';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { TypeGoods } from '../../components/type/typeGoods';
import { Envioronment } from '../../common/envioronment';


@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})

export class Goods implements OnInit {

  dataList: Array<String> = [];

  goods: TypeGoods= new TypeGoods();

  dataServer:String = Envioronment.dataServer;

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


    this.apollo.query<TypeGoods>(query).subscribe(({ data }) => {
      Object.assign(this.goods, data['goods']);
      for (let i = 0; i < this.goods.Images.length; i++) {
        this.dataList.push(Envioronment.dataServer+"/" + this.goods.Images[i].path);
      }
      this.goods.validTime = parseFloat(this.goods.validTime + '') / 86400000;
    })
  }

  toDetail() {
    this.navCtrl.push("GoodsDetailPage", {
      id: this.goods.id
    });
  }

  showConfirm(name: String, score: Number) {
    let confirm = this.alertCtrl.create({
      title: '兑换商品',
      message: '确定要兑换' + name + '吗？将消耗' + score + '!',
      buttons: [
        {
          text: '取消',
          handler: () => {
            return;
          }
        },
        {
          text: '确定',
          handler: () => {
            this.doTrans();
          }
        }
      ]
    });
    confirm.present();
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
        console.log(data);
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
