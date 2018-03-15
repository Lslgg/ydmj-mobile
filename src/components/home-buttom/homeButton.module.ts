import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { HomeButtonComponent } from './homeButton';


@NgModule({
    declarations: [      
        HomeButtonComponent
    ],
    imports: [
        IonicModule,
    ],
    entryComponents: [        
        HomeButtonComponent
    ],
    exports: [       
        HomeButtonComponent
    ]
})
export class HomeButtonModule { }
