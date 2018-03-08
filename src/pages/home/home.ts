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
  sortList:Array<String> = ["综合排序","积分由高到低","积分有低到高","销量由高到低","销量由低到高"];
  dataList:Array<String> = ["assets/imgs/home/hometop.png","assets/imgs/home/hometop.png","assets/imgs/home/hometop.png","assets/imgs/home/hometop.png"];

  onGoods() {
    this.navCtrl.push('Goods');
  }

}
