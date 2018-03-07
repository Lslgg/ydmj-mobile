import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'user-icon',
    templateUrl: './orderIcon.html',
})
export class orderIconComponent implements OnInit {
    @Output() clickBox = new EventEmitter<String>();
    constructor() { }

    ngOnInit() { }

    onClick(info:String) {
        this.clickBox.emit(info);
    }
}