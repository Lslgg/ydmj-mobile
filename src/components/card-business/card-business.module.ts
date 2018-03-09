import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { CardBusinessComponent } from './card-business';



@NgModule({
    declarations: [
        CardBusinessComponent
    ],
    imports: [
        IonicModule,
    ],
    entryComponents: [
        CardBusinessComponent
    ],
    exports: [
        CardBusinessComponent
    ]
})
export class CardBusinessModule { }
