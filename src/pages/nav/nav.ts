import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { DetailPage } from './page/detail';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
})
export class NavPage implements OnInit {
    constructor(public navCtrl: NavController) { }

    ngOnInit() { }
    itemSelected() {
        this.navCtrl.push(DetailPage);
    }
}
