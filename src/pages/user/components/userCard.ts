import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'user-card',
    templateUrl: './userCard.html',
})
export class userCardComponent implements OnInit {

    @Input() headimgurl = 'assets/imgs/home/hometop.png';

    @Input() nickname = '';

    @Input() score = '加载中';

    constructor() { }

    ngOnInit() { }

}