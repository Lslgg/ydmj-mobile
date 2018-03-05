import { ViewController } from "ionic-angular";
import { Component } from "@angular/core";

@Component({
    template: `
      <ion-list>
        <ion-list-header>排序方式</ion-list-header>
        <button ion-item (click)="close()">综合排序</button>
        <button ion-item (click)="close()">积分由高到低</button>
        <button ion-item (click)="close()">积分有低到高</button>        
        <button ion-item (click)="close()">销量由高到低</button>
        <button ion-item (click)="close()">销量由低到高</button>        
      </ion-list>
      `,
    styles: [`         
        .list {
            border-radius:10px;
        }        
    `]

})
export class SortPopover {
    constructor(public viewCtrl: ViewController) { }

    close() {
        this.viewCtrl.dismiss();
    }
}
