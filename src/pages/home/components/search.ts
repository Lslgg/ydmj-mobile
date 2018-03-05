import { Component, OnInit } from '@angular/core';
import { PopoverController, ViewController } from 'ionic-angular';
import { SortPopover } from './sortPopover.component';


@Component({
    selector: 'home-search',
    template: `
        <ion-row  class="row-search" >
            <ion-col>            
                <ion-row  class="row-search" justify-content-end>
                    <ion-col col-auto>                                    
                        <input type="text">                     
                    </ion-col>                    
                    <ion-col col-auto style="padding-left:0;">        
                        <button ion-button icon-only small (click)="presentPopover($event)">
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
export class SearchComponent implements OnInit {
    constructor(public popoverCtrl: PopoverController) { }

    ngOnInit() { }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(SortPopover);
        popover.present({
            ev: myEvent
        });
    }
}




