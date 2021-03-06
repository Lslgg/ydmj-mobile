import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { TypeBusiness } from '../../components/type/typeBusiness';


@IonicPage()
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage implements OnInit {
  
  sortList: Array<{ key: String, value: String }> = [{ key: "综合排序", value: "综合排序" }, { key: "销量由高到低", value: "销量由高到低" },
  { key: "销量由低到高", value: "销量由低到高" }];
  businessList: Array<TypeBusiness> = [];

  pageSize: Number = 2;

  pageIndex: Number = 1;

  sort: any = null;

  search: String = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private apollo: Apollo) { }

  ngOnInit(): void {
    this.getBusinessList();
  }

  clickCard(info: String) {
    this.navCtrl.push("BusinessPage", {
      id: info,
    });
  }

  getBusinessList() {

    if (!this.search) {
      this.search = '';
    }

    if (!this.sort) {
      this.sort = { sortIndex: -1 };
    }

    const sql = gql`
      query($pageIndex:Int,$pageSize:Int,$business:searchBusiness,$sort:sortObj){
        businessList:  getBusinessPageM(pageIndex:$pageIndex,pageSize:$pageSize,business:$business,sort:$sort) {
          id,name,address,phone,hours,brief,Images{path},times,score          
        }
      }`;

    var query: any = {
      query: sql,
      variables: { pageIndex: this.pageIndex, pageSize: this.pageSize, business: { name: this.search, isValid: true }, sort: this.sort },
      fetchPolicy: "network-only"
    }   

    this.apollo.query<TypeBusiness>(query).subscribe(({ data }) => {
      if (data && data['businessList']) {
        for (let i = 0; i < data['businessList'].length; i++) {
          this.businessList.push(data['businessList'][i]);
        }
      }
    });
  }

  onSort(info: String) {
    this.getSortObj(info);
    this.search = null;
    this.pageIndex = 1;
    this.businessList = [];
    this.getBusinessList();
  }

  onSearch(info: String) {
    this.search = info;
    this.sort = null;
    this.pageIndex = 1;
    this.businessList = [];
    this.getBusinessList();
  }

  onMore() {
    this.pageIndex = parseInt(this.pageIndex + '') + 1;
    this.getBusinessList();
  }

  getSortObj(info: String) {
    if (info == "综合排序") {
      this.sort = { sortIndex: -1 };
    }
    if (info == "销量由高到低") {
      this.sort = { times: -1 };
    }
    if (info == "销量由低到高") {
      this.sort = { times: 1 };
    }
  }

}
