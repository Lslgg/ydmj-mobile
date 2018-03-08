import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { NavPage } from '../nav/nav';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  onClick(info: String) {
    console.log(info);
    if (info == '我的兑换') {
      this.navCtrl.push(ListPage);
    } else if (info == '常见问题') {
      this.navCtrl.push(NavPage);
    }
  }

}
