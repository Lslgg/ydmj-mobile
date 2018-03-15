import { Component, OnInit, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

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