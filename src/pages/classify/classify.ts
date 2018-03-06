import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage {
  dataList:Array<String> = ["assets/imgs/home/hometop.png","assets/imgs/home/hometop.png","assets/imgs/home/hometop.png","assets/imgs/home/hometop.png"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
  }

}
