import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'home-card',
    templateUrl: 'card.html'
})
export class CardComponent implements OnInit {
    @Output() onGoods = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() { }

    clickGoods() {
        this.onGoods.emit(true);
    }
}