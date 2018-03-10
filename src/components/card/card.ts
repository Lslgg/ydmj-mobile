import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'home-card',
    templateUrl: 'card.html'
})
export class CardComponent implements OnInit {
    @Output() onCard = new EventEmitter<String>();
    @Input() dataList: Array<{id:String, name: String, Business: { name: String }, times: Number, score: Number, Images: { path: String } }> = [];
    constructor() { }

    ngOnInit() { }

    clickCard(info:String) {
        this.onCard.emit(info);
    }
}