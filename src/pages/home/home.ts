import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private apollo: Apollo) {
    this.getGoodsList("", "");
  }
  sortList: Array<String> = ["综合排序", "积分由高到低", "积分由低到高", "销量由高到低", "销量由低到高"];
  adList: Array<String> = ["assets/imgs/home/hometop.png", "assets/imgs/home/hometop.png", "assets/imgs/home/hometop.png", "assets/imgs/home/hometop.png"];
  goodsList: Array<{ name: String, Business: { name: String }, times: Number, score: Number }> = [];
  pageSize: Number = 10;
  pageIndex: Number = 1;

  onGoods() {
    this.navCtrl.push('Goods');
  }

  getGoodsList(search: String, sort: any) {

    console.log(search);

    if (!search) {
      search = '';
    }
    if (!sort || sort=='') {
      sort = {sortIndex: 1};
    }

    const sql = gql`
      query($pageIndex:Int,$pageSize:Int,$goods:searchGoods,$sort:sortObj){
        goodsList:  getGoodsPageM(pageIndex:$pageIndex,pageSize:$pageSize,goods:$goods,sort:$sort) {
          id,name,Business{name},times,score
        }
      }`;

    var query: any = {
      query: sql,
      variables: { pageIndex: this.pageIndex, pageSize: this.pageSize, goods: { name: search }, sort: sort },
      fetchPolicy: "network-only",
    }
    type goods = Array<{ name: String, Business: { name: String }, times: Number, score: Number }>;
    this.apollo.query<goods>(query).subscribe(({ data }) => {
      console.log(data);
    })
  }

  onSort(info: String) {
    var sort:any = {};    
    if (info == "综合排序") {
      sort = { sortIndex: -1 };
    }
    if (info == "积分由高到低") {
      sort = { score: 1 };
    }
    if (info == "积分由低到高") {
      sort = { score: -1 };
    }
    if (info == "销量由高到低") {
      sort = { sortIndex: 1 };
    }
    if (info == "销量由低到高") {
      sort = { sortIndex: 1 };
    }
    this.getGoodsList("", sort);
  }

  onSearch(info: String) {
    this.getGoodsList(info, "");
  }

}
