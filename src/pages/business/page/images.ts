import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage implements OnInit {
    
  imgs: Array<{ path: String }> = [];

  constructor(public navParams: NavParams) { }

  ngOnInit(): void {
    if (!this.navParams.get('imgs')) return;
    this.imgs = this.navParams.get('imgs');
  }

}
