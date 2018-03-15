import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagesPage } from './images';
import { HomeButtonModule } from '../../../components/home-buttom/homeButton.module';


@NgModule({
  declarations: [
    ImagesPage
  ],
  imports: [
    IonicPageModule.forChild(ImagesPage),
    HomeButtonModule
  ],
})
export class ImagesModule { }
