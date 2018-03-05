import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Goods } from './goods';
import { TextComponent } from './components/text';

@NgModule({
  declarations: [
    Goods,    
    TextComponent    
  ],  
  imports: [
    IonicPageModule.forChild(Goods),
  ],  
})
export class GoodsModule { }
