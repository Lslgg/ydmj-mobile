import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


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
  } = {
      id: '', name: '', address: '', phone: '', hour: '', brief: '', Images: [{ path: '' }],
      times: 0, score: 0
    };

  sortList: Array<{ key: String, value: String }> = [];

  goodsList: Array<{
    id: String, name: String, Business: { id: String, name: String }, times: Number,
    score: Number, Images: { path: String }
  }> = [];

  pageSize: Number = 2;

  pageIndex: Number = 1;

  sort: any = null;

  search: String = null;

  goodsTypeId: String = null;

  constructor(public navCtrl: NavController, private apollo: Apollo, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.id = this.navParams.get('id');
    this.getGoodsList();
    this.getBusiness();
    this.getSortList();
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
      variables: { id: this.id },
      fetchPolicy: "network-only"
    }

    type business = {
      name: String, Business: { id: String, name: String },
      times: Number, score: Number, Images: { path: String }
    };

    this.apollo.query<business>(query).subscribe(({ data }) => {
      if (data && data['business']) {
        this.business = data['business'];
      }
    });

  }

  onGoods(info: String) {
    this.navCtrl.push("Goods", {
      id: info
    });
  }

  getGoodsList() {

    if (!this.search) {
      this.search = '';
    }

    if (!this.goodsTypeId) {
      this.goodsTypeId = '';
    }

    if (!this.sort) {
      this.sort = { sortIndex: -1 };
    }

    const sql = gql`
      query($pageIndex:Int,$pageSize:Int,$goods:searchGoods,$sort:sortObj){
        goodsList:  getGoodsPageM(pageIndex:$pageIndex,pageSize:$pageSize,goods:$goods,sort:$sort) {
          id,name,Business{id,name},times,score, Images{path}
        }
      }`;

    var query: any = {
      query: sql,
      variables: {
        pageIndex: this.pageIndex, pageSize: this.pageSize, goods: {
          businessId: `{"$eq":"${this.id}"}`, name: this.search,
          isValid: true
        }, sort: this.sort
      },
      fetchPolicy: "network-only"
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
    // this.getSortObj(info);
    // this.goodsTypeId = info;
    // this.pageIndex = 1;
    // this.goodsList = [];
    // this.getGoodsList();
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
    this.search = info;
    this.sort = null;
    this.pageIndex = 1;
    this.goodsList = [];
    this.getGoodsList();
  }

  getSortList() {
    const sql = gql`query($id:Json){
      goodsTypeList:getGoodsTypeWhere(goodsType:{businessId:$id}) {
        id name
      }
    }`;

    var query: any = {
      query: sql,
      variables: { id: `{"$eq":"${this.id}"}` },
      fetchPolicy: "network-only"
    }

    type goodsType = Array<{ id: String, name: String }>;

    this.apollo.query<goodsType>(query).subscribe(({ data }) => {
      if (data && data['goodsTypeList']) {
        for (let i = 0; i < data['goodsTypeList'].length; i++) {
          this.sortList.push({ key: data['goodsTypeList'][i].id, value: data['goodsTypeList'][i].name });
        }
      }
    })
  }

  toImages() {
    this.navCtrl.push("ImagesPage", {
      imgs: this.business.Images
    });
  }

}
