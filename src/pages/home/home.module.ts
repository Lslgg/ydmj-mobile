import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SearchModule } from '../../components/search-bar/search.module';
import { CardModule } from '../../components/card/card.module';
import { SlideAdModule } from '../../components/slide-ad/slideAd.module';
import { MoreModule } from '../../components/more/more.module';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SearchModule,
    CardModule,
    SlideAdModule,
    MoreModule
  ],
  entryComponents: [
    HomePage,
  ],
})
export class HomePageModule { }
