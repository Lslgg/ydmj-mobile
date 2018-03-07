import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-list',
    templateUrl: './list.html',
    // styleUrls: ['./list.scss']
})
export class ListPage implements OnInit {
    constructor(public alertCtrl: AlertController) { }

    ngOnInit() { }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    }
}
