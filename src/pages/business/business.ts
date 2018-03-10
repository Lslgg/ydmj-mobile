import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagesPage } from './page/images';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Goods } from '../goods/goods';


@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage implements OnInit {

  id: String;
  business: {
    id: String, name: String, address: String, phone: String, hour: String,
    brief: String, Images: Array<{ path: String }>, times: Number, score: Number
  } = { id: '', name: '', address: '', phone: '', hour: '', brief: '', Images: [{ path: '' }], times: 0, score: 0 };
  constructor(public navCtrl: NavController, private apollo: Apollo, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.id = this.navParams.get('id');
    this.getGoodsList();
    this.getBusiness();
  }

  getBusiness() {
    const sql = gql`
    query($id:String) {
      business:getBusinessById(id:$id) {
        id,name,address,phone,hours,brief,Images{path},times,score          
      }
    }`;
    var query: any = {
      query: sql,
      variables: { $id: this.id }
    }

    type business = { name: String, Business: { id: String, name: String }, times: Number, score: Number, Images: { path: String } };
    this.apollo.query<business>(query).subscribe(({ data }) => {
      console.log(data);
      if (data && data['business']) {
        this.business = data['business'];
      }
    });
  }



  sortList: Array<String> = ["综合排序", "积分由高到低", "积分由低到高", "销量由高到低", "销量由低到高"];
  goodsList: Array<{ id: String, name: String, Business: { name: String }, times: Number, score: Number, Images: { path: String } }> = [];
  pageSize: Number = 2;
  pageIndex: Number = 1;
  sort: any = null;
  search: String = null;

  onGoods(info: String) {
    this.navCtrl.push(Goods, {
      id: info
    });
  }

  getGoodsList() {

    if (!this.search) {
      this.search = '';
    }

    if (!this.sort) {
      this.sort = { sortIndex: -1 };
    }

    const sql = gql`
      query($pageIndex:Int,$pageSize:Int,$goods:searchGoods,$sort:sortObj){
        goodsList:  getGoodsPageM(pageIndex:$pageIndex,pageSize:$pageSize,goods:$goods,sort:$sort) {
          id,name,Business{name},times,score, Images{path}
        }
      }`;

    var query: any = {
      query: sql,
      variables: { pageIndex: this.pageIndex, pageSize: this.pageSize, goods: { businessId: `{"$eq":"${this.id}"}`, name: this.search, isValid: true }, sort: this.sort },
    }

    type goods = Array<{ name: String, Business: { id: String, name: String }, times: Number, score: Number, Images: { path: String } }>;

    this.apollo.query<goods>(query).subscribe(({ data }) => {
      if (data && data['goodsList']) {
        for (let i = 0; i < data['goodsList'].length; i++) {
          this.goodsList.push(data['goodsList'][i]);
        }
      }
    })
  }

  onSort(info: String) {
    var sort = this.getSortObj(info);
    this.search = null;
    this.pageIndex = 1;
    this.goodsList = [];
    this.getGoodsList();
  }

  onSearch(info: String) {
    this.search = info;
    this.sort = null;
    this.pageIndex = 1;
    this.goodsList = [];
    this.getGoodsList();
  }

  onMore() {
    this.pageIndex = parseInt(this.pageIndex + '') + 1;
    this.getGoodsList();
  }

  getSortObj(info: String) {
    if (info == "综合排序") {
      this.sort = { sortIndex: -1 };
    }
    if (info == "积分由高到低") {
      this.sort = { score: -1 };
    }
    if (info == "积分由低到高") {
      this.sort = { score: 1 };
    }
    if (info == "销量由高到低") {
      this.sort = { times: -1 };
    }
    if (info == "销量由低到高") {
      this.sort = { times: 1 };
    }
  }

  toImages() {
    this.navCtrl.push(ImagesPage, {
      imgs: this.business.Images
    });
  }

}
