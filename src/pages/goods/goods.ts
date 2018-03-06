import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { Detail } from './components/detail';


@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})
export class Goods {
  dataList: Array<String> = ["assets/imgs/home/hometop.png", "assets/imgs/home/hometop.png", "assets/imgs/home/hometop.png", "assets/imgs/home/hometop.png"];
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
  }

  toDetail() {
    this.navCtrl.push(Detail);
    // let popover = this.popoverCtrl.create(Detail);
    // popover.present();
  }

}
