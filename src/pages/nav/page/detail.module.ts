import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { HomeButtonModule } from '../../../components/home-buttom/homeButton.module';

@NgModule({
    declarations: [DetailPage],
    imports: [IonicPageModule.forChild(DetailPage),HomeButtonModule],
    providers: [],
})
export class DetailPageModule { }