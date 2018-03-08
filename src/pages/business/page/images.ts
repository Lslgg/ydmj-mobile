import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage {
  dataList: Array<String> = ["assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg", "assets/imgs/welcome.jpg"];
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
  }

}
