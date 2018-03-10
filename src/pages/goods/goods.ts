import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
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
    id: String, Business: { name: String, address: String }, GoodsType: { name: String }, Images: Array<{ path: String }>,
    name: String, score: Number, ruler: String, explain: String, stock: Number, times: Number, validTime: Number
  } =
    { id: '', Business: { name: '', address: '' }, GoodsType: { name: '' }, Images: [], name: '', score: 0, ruler: '', explain: '', stock: 0, times: 0, validTime: 0 };

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController,
    public navParams: NavParams, private apollo: Apollo) { }

  ngOnInit(): void {
    if (this.navParams.get('id')) {
      this.getDataList(this.navParams.get('id'));
    }
  }

  getDataList(id: any) {
    const sql = gql`
      query($id:String){
        goods:getGoodsById(id:$id ) {
          id Business{name,address} GoodsType{name} Images{path} name score ruler explain stock times validTime          
        } 
      }
    `;

    var query: any = {
      query: sql,
      variables: { id: id },
    }
    type goods = { id: String, Business: { name: String, address: String }, GoodsType: { name: String }, Images: Array<{ path: String }>, name: String, score: Number, ruler: String, explain: String, stock: Number, times: Number, validTime: Number };
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

}
