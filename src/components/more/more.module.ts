import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { MoreComponent } from './more';



@NgModule({
    declarations: [      
        MoreComponent  
    ],
    imports: [
        IonicModule,
    ],
    entryComponents: [        
        MoreComponent
    ],
    exports: [       
        MoreComponent 
    ]
})
export class MoreModule { }
