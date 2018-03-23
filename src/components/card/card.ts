import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Envioronment } from '../../common/envioronment';

@Component({
    selector: 'home-card',
    templateUrl: 'card.html'
})
export class CardComponent implements OnInit {
    @Output() onCard = new EventEmitter<String>();
    @Input() dataList: Array<{id:String, name: String, Business: { name: String }, times: Number, score: Number, Images: { path: String } }> = [];
    dataServer:String = Envioronment.dataServer;
    
    constructor() { }

    ngOnInit() { }

    clickCard(info:String) {
        this.onCard.emit(info);
    }
}