import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavPage } from './nav';
import { DetailPageModule } from './page/detail.module';
import { HomeButtonModule } from '../../components/home-buttom/homeButton.module';

@NgModule({
    declarations: [NavPage],
    imports: [IonicPageModule.forChild(NavPage),DetailPageModule,HomeButtonModule],
    providers: [],
})
export class NavPageModule { }