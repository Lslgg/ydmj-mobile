import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagesPage } from './page/images';


@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  dataList: Array<String> = ["assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg"];
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
  }

  toImages() {
    this.navCtrl.push(ImagesPage);
  }

}
