import { Component, OnInit } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'home-details',
    templateUrl: 'detail.html'
})
export class GoodsDetailPage implements OnInit {

    goods: {
        id: String, Business: { name: String, address: String }, GoodsType: { name: String },
        Images: Array<{ path: String }>,
        name: String, score: Number, ruler: String, explain: String, stock: Number,
        times: Number, validTime: Number
    } = {
            id: '', Business: { name: '', address: '' }, GoodsType: { name: '' },
            Images: [], name: '', score: 0, ruler: '', explain: '', stock: 0, times: 0, validTime: 0
        };

    constructor(public navParams: NavParams) { }

    ngOnInit() {
        this.goods = this.navParams.get('goods');
    }

}