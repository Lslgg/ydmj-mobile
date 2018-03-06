import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'home-slide-goods',
    templateUrl: 'slideGoods.html'
})
export class SlideGoodsComponent implements OnInit {
    @Output() onCard = new EventEmitter<boolean>();
    @Input() dataList: Array<String> = [];
    constructor() { }

    ngOnInit() { }

    clickGoods() {
        this.onCard.emit(true);
    }
}