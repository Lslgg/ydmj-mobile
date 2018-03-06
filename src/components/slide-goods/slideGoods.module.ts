import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { SlideGoodsComponent } from './slideGoods';



@NgModule({
    declarations: [
        SlideGoodsComponent
    ],
    imports: [
        IonicModule,
    ],
    entryComponents: [
        SlideGoodsComponent
    ],
    exports: [
        SlideGoodsComponent
    ]
})
export class SlideGoodsModule { }
