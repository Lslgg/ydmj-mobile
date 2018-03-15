import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifyPage } from './classify';
import { SearchModule } from '../../components/search-bar/search.module';
import { SlideAdModule } from '../../components/slide-ad/slideAd.module';
import { CardBusinessModule } from '../../components/card-business/card-business.module';
import { MoreModule } from '../../components/more/more.module';
import { HomeButtonModule } from '../../components/home-buttom/homeButton.module';

@NgModule({
  declarations: [
    ClassifyPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifyPage),
    SearchModule,
    CardBusinessModule,
    SlideAdModule,
    MoreModule,
    HomeButtonModule
  ],
})
export class ClassifyPageModule { }
