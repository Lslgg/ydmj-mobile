import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Goods } from './goods';
import { SlideGoodsModule } from '../../components/slide-goods/slideGoods.module';
import { HomeButtonModule } from '../../components/home-buttom/homeButton.module';

@NgModule({
  declarations: [
    Goods,        
  ],
  imports: [
    IonicPageModule.forChild(Goods),
    SlideGoodsModule,
    HomeButtonModule
  ],  
  entryComponents: [
    Goods,        
  ],
})
export class GoodsModule { }
