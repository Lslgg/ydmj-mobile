import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
    selector: 'app-nav-detail',
    templateUrl: './detail.html',
})
export class DetailPage implements OnInit {
    constructor(public navCtrl: NavController) { }

    ngOnInit() { }
}
