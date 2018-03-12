import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { SortPopover } from './sortPopover';

@Component({
    selector: 'home-search',
    template: `
        <ion-row  class="row-search" >
            <ion-col>            
                <ion-row  class="row-search" justify-content-end>
                    <ion-col col-auto>                                    
                        <input type="text" #text>                     
                    </ion-col>                    
                    <ion-col col-auto style="padding-left:0;">        
                        <button ion-button icon-only small (click)="doSearch(text.value)">
                            <ion-icon name="search"></ion-icon>                            
                        </button>
                    </ion-col>
                    <ion-col col-auto>
                        <button ion-button icon-only small (click)="presentPopover($event)">
                            <ion-icon name="arrow-down"></ion-icon>                            
                        </button>   
                    </ion-col>
                </ion-row>                
            </ion-col>            
        </ion-row>
    `
})
export class Search implements OnInit {

    @Input() sortList: Array<{ key: String, value: String }> = [];

    @Input() title: String = '';

    @Output() onSort = new EventEmitter<String>();

    @Output() onSearch = new EventEmitter<String>();

    constructor(public popoverCtrl: PopoverController) { }

    ngOnInit() { }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(SortPopover, { sortList: this.sortList, title: this.title });
        popover.present({
            ev: myEvent,
        });
        popover.onDidDismiss((data, role) => {
            if (data && data.data) {
                this.onSort.emit(data.data);
            }
        });
    }

    doSearch(info: String) {
        this.onSearch.emit(info);
    }
}

