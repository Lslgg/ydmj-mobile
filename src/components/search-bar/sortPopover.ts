import { ViewController, NavParams } from "ionic-angular";
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    template: `
      <ion-list>
        <ion-list-header>{{title}}</ion-list-header>
        <ng-container *ngFor="let item of sortList;">
            <button ion-item (click)="close(item)">{{item}}</button>        
        </ng-container>        
      </ion-list>
      `,
    styles: [`         
        .list {
            border-radius:10px;
        }        
    `]

})
export class SortPopover {

    sortList: Array<String> = [];
    title: String = '排序方式';


    constructor(public viewCtrl: ViewController, public params: NavParams) {
        if (this.params.data.sortList) {
            this.sortList = this.params.data.sortList;
        }
        if (this.params.data.title && this.params.data.title != '') {
            this.title = this.params.data.title;
        }
    }

    close(info: String) {
        if (info) {
            this.viewCtrl.dismiss({ data: info });
        }
    }
}
