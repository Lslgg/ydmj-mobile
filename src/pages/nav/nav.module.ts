import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavPage } from './nav';
import { DetailPageModule } from './page/detail.module';

@NgModule({
    declarations: [NavPage],
    imports: [IonicPageModule.forChild(NavPage),DetailPageModule],
    providers: [],
})
export class NavPageModule { }