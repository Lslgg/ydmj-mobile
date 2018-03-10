import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'home-card-business',
    templateUrl: 'card-business.html'
})
export class CardBusinessComponent implements OnInit {
    @Output() onCard = new EventEmitter<String>();
    @Input() dataList: Array<{
        id: String, name: String, address: String, phone: String, hour: String,
        brief: String, Images: { path: String }, times: Number, score: Number
    }> = [];
    constructor() { }

    ngOnInit() { }

    clickCard(info:String) {
        this.onCard.emit(info);
    }
}