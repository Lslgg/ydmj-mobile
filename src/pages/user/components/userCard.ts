import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'user-card',
    templateUrl: './userCard.html',
})
export class userCardComponent implements OnInit {

    _headimgurl: String;
    _nickname: String;
    _score: String;
    @Input()
    set headimgurl(info: String) {
        if (info && info != '') {
            this._headimgurl = info;
        } else {
            this._headimgurl = 'assets/imgs/home/hometop.png';
        }
    }

    @Input()
    set nickname(info: string) {
        if (info && info != '') {
            this._nickname = info;
        } else {
            this._nickname = '加载中';
        }
    }

    @Input()
    set score(info: Number) {
        if (info) {
            this._score = info + '';
        } else {
            this._score = '加载中';
        }
    }

    constructor() { }

    ngOnInit() { }

}