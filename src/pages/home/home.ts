import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Goods } from '../goods/goods';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sortList: Array<{ key: String, value: String }> = [{ key: "综合排序", value: "综合排序" }, { key: "积分由高到低", value: "积分由高到低" },
  { key: "积分由低到高", value: "积分由低到高" }, { key: "销量由高到低", value: "销量由高到低" }, { key: "销量由低到高", value: "销量由低到高" }];

  goodsList: Array<{
    id: String, name: String, Business: { name: String },

    times: Number, score: Number, Images: { path: String }
  }> = [];

  pageSize: Number = 2;

  pageIndex: Number = 1;

  sort: any = null;

  search: String = null;

  constructor(public navCtrl: NavController, private apollo: Apollo) {
    this.getGoodsList();
  }

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
      variables: {
        pageIndex: this.pageIndex, pageSize: this.pageSize,
        goods: { name: this.search, isValid: true }, sort: this.sort
      },
      fetchPolicy: "network-only"
    }

    type goods = Array<{
      name: String, Business: { id: String, name: String },
      times: Number, score: Number, Images: { path: String }
    }>;

    this.apollo.query<goods>(query).subscribe(({ data }) => {
      if (data && data['goodsList']) {
        for (let i = 0; i < data['goodsList'].length; i++) {
          this.goodsList.push(data['goodsList'][i]);
        }
      }
    })
  }

  onSort(info: String) {
    this.getSortObj(info);
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

}
