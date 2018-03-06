import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'home-slide-ad',
    templateUrl: 'slideAd.html'
})
export class SlideAdComponent implements OnInit {
    @Output() onCard = new EventEmitter<boolean>();
    @Input() dataList: Array<String> = [];
    constructor() { }

    ngOnInit() { }

    clickGoods() {
        this.onCard.emit(true);
    }
}