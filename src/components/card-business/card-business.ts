import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'home-card-business',
    templateUrl: 'card-business.html'
})
export class CardBusinessComponent implements OnInit {
    @Output() onCard = new EventEmitter<boolean>();
    @Input() dataList: Array<{ goodsName: String, businessName: String, times: String, score: String }> = [];    
    constructor() { }

    ngOnInit() { }

    clickCard() {
        this.onCard.emit(true);
    }
}