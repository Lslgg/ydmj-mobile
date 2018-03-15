import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessPage } from './business';
import { SearchModule } from '../../components/search-bar/search.module';
import { CardModule } from '../../components/card/card.module';
import { MoreModule } from '../../components/more/more.module';
import { SlideGoodsModule } from '../../components/slide-goods/slideGoods.module';
import { ImagesModule } from './page/images.module';
import { HomeButtonModule } from '../../components/home-buttom/homeButton.module';


@NgModule({
  declarations: [
    BusinessPage
  ],
  imports: [
    IonicPageModule.forChild(BusinessPage),
    SearchModule,
    CardModule,
    MoreModule,
    SlideGoodsModule,
    ImagesModule,
    HomeButtonModule
  ],
})
export class BusinessModule { }
