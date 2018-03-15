import { Component, OnInit, Input } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { checkNoChangesNode } from '@angular/core/src/view/view';

@Component({
    selector: 'home-buttom',
    templateUrl: 'homeButton.html'
})
export class HomeButtonComponent implements OnInit {

    @Input() show: Boolean = true;
    @Input() color: String = 'danger';

    constructor(public appCtrl: App) {
    }

    ngOnInit() {
        // if (!this.show) {
        //     let tabbar = document.getElementsByClassName('show-tabbar');
        //     if (!tabbar || tabbar.length == 0) {
        //         this.show = true;
        //     }
        // }
    }

    goHome() {
        this.appCtrl.getRootNav().push(TabsPage);
    }

}