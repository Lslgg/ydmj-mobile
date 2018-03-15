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

  onClick(info: String) {
    if (info == '我的兑换' || info == '未兑换' || info == '已兑换' || info == '已过期') {
      this.navCtrl.push(ListPage, {
        info: info
      });
    } else if (info == '常见问题') {
      this.navCtrl.push(NavPage);
    }
  }

}
