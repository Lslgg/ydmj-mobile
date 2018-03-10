import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'home-more',
    templateUrl: 'more.html'
})
export class MoreComponent implements OnInit {
    @Output() onMore = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() { }

    more() {
        this.onMore.emit(true);
    }

}