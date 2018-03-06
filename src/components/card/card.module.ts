import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { CardComponent } from './card';



@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        IonicModule,
    ],
    entryComponents: [
        CardComponent
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule { }
