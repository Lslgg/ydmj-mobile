import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Goods } from '../goods/goods';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoods() {
    this.navCtrl.push(Goods);
  }

}
