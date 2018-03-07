import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'user-order',
    templateUrl: './orderRow.html',
})
export class orderRowComponent implements OnInit {

    @Input() iconName: String = '';
    @Input() textCenter: String = '';
    @Input() textRight: String = '';
    @Output() clickBox = new EventEmitter<String>();

    constructor() { }

    ngOnInit() { }

    onClick(info:String) {        
        this.clickBox.emit(info);
    }
}