import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'home-card',
    templateUrl: 'card.html'
})
export class CardComponent implements OnInit {
    @Output() onCard = new EventEmitter<boolean>();    
    @Input() dataList: Array<{ goodsName: String, businessName: String, times: String, score: String }> = [];
    @Input() isGoods:Boolean  = true;
    constructor() { }

    ngOnInit() { }

    clickCard() {
        this.onCard.emit(true);
    }
}