import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifyPage } from './classify';
import { SearchModule } from '../../components/search-bar/search.module';
import { CardModule } from '../../components/card/card.module';
import { SlideAdModule } from '../../components/slide-ad/slideAd.module';

@NgModule({
  declarations: [
    ClassifyPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifyPage),
    SearchModule,
    CardModule,
    SlideAdModule
  ],
})
export class ClassifyPageModule { }
