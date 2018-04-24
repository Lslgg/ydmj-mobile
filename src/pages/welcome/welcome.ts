import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) { }

  login() {
    this.navCtrl.push("LoginPage")
  }

  signup() {
    this.navCtrl.push("SignupPage")
  }

  wxlogin() {
    var url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7b80c3dba5d880b6&redirect_uri=http%3a%2f%2fmall.ydxxba.com%2fwxlogin&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
    window.location.href = url;
  }
}
