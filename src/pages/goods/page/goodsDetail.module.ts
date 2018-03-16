import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeButtonModule } from '../../../components/home-buttom/homeButton.module';
import { GoodsDetailPage } from './goodsDetail';


@NgModule({
  declarations: [
    GoodsDetailPage
  ],
  imports: [
    IonicPageModule.forChild(GoodsDetailPage),
    HomeButtonModule
  ],
  exports:[
    GoodsDetailPage
  ]
})
export class GoodsDetailPageModule { }
