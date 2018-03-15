import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsDetailPage } from './detail';


@NgModule({
  declarations: [
    GoodsDetailPage
  ],
  imports: [
    IonicPageModule.forChild(GoodsDetailPage)
  ],
  entryComponents: [
    GoodsDetailPage
  ]
})
export class GoodsDetailPageModule { }
