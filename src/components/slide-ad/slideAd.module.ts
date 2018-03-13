import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { SlideAdComponent } from './slideAd';



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
