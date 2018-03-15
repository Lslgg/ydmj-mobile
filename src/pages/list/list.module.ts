import { NgModule } from '@angular/core';
import { ListPage } from './list';
import { IonicPageModule } from 'ionic-angular';
import { HomeButtonModule } from '../../components/home-buttom/homeButton.module';

@NgModule({
    declarations: [ListPage],
    imports: [IonicPageModule.forChild(ListPage),HomeButtonModule],    
    providers: [],
})
export class ListPageModule { }