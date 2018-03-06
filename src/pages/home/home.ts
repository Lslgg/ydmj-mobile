import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  dataList:Array<String> = ["assets/imgs/home/hometop.png","assets/imgs/home/hometop.png","assets/imgs/home/hometop.png","assets/imgs/home/hometop.png"];

  onGoods() {
    this.navCtrl.push('Goods');
  }

}
