import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { Detail } from './components/detail';


@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})
export class Goods {
  dataList: Array<String> = ["assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg"];
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
