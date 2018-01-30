import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular/module';
import { ReactiveFormsModule } from '@angular/forms'; 

import { DataFormComponent } from './data-form';
import { FmGroupComponent } from './components/fm-group';
import { FmItemComponent } from './components/fm-item';
import { FmVerifyComponent } from './components/fm-verify';


@NgModule({
    declarations: [
        DataFormComponent,
        FmItemComponent,
        FmGroupComponent,
        FmVerifyComponent,
    ],
    imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DataFormComponent,
        FmItemComponent,
        FmGroupComponent,
        FmVerifyComponent,
    ]
})
export class DataFormModule { }
