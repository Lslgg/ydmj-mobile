import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit {


  nickname: String = '';
  headimgurl: String = '';
  score: String = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private apollo: Apollo) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    const sql = gql`query{ 
      user:currentUser {
        id nickname headimgurl
      }
    }`;

    var query: any = {
      query: sql,
      fetchPolicy: "network-only"
    }

    this.apollo.query<any>(query).subscribe(({ data }) => {
      if (data && data['user']) {
        this.nickname = data['user']['nickname'];
        this.headimgurl = data['user']['headimgurl'];
      }
    })
  }

  onClick(info: String) {
    if (info == '我的兑换' || info == '未兑换' || info == '已兑换' || info == '已过期') {
      this.navCtrl.push("ListPage", {
        info: info
      });
    } else if (info == '常见问题') {
      this.navCtrl.push("NavPage");
    }
  }

}
