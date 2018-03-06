import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { SlideAdComponent } from './slideGoods';



@NgModule({
    declarations: [
        SlideAdComponent
    ],
    imports: [
        IonicModule,
    ],
    entryComponents: [
        SlideAdComponent
    ],
    exports: [
        SlideAdComponent
    ]
})
export class SlideAdModule { }
