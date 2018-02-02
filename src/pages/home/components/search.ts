import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-search',
    template: `
        <ion-row  class="row-search">
            <ion-col col-8>
                <input type="text" style="width:120px;">
                <a href="javascript:;">搜索</a>
            </ion-col>
            <ion-col col-4  text-right>
                <a href="javascript:;">积分从高到底</a>
            </ion-col>
        </ion-row>
    `
})
export class SearchComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}