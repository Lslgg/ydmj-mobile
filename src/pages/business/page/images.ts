import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';


@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage implements OnInit {
    
  imgs: Array<{ path: String }> = [];

  constructor(public navParams: NavParams, private apollo: Apollo) { }

  ngOnInit(): void {
    if (!this.navParams.get('imgs')) return;
    this.imgs = this.navParams.get('imgs');
  }

}
