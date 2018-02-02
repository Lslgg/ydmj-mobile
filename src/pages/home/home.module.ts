import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CardComponent } from './components/card';
import { SearchComponent } from './components/search';


@NgModule({
  declarations: [
    HomePage,
    CardComponent,
    SearchComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
