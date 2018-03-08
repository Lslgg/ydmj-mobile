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
            title: '兑换详情',
            subTitle: '商品名：可乐<br/>兑换时间：tet<br/>过期时间：test<br/>状态：test<br/>兑换码：test',
            buttons: ['OK']
        });
        alert.present();
    }

    showDetail() {
        this.showAlert();
    }
}
