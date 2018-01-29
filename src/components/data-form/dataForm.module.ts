import { NgModule } from '@angular/core';
import { DataFormComponent } from './data-form';
import { FmItemComponent } from './components/fm-item';
import { FmVerifyComponent } from './components/fm-verify';
import { IonicModule } from 'ionic-angular/module';


@NgModule({
    declarations: [
        DataFormComponent,
        FmItemComponent,
        FmVerifyComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        DataFormComponent,
        FmItemComponent,
        FmVerifyComponent
    ]
})
export class ComponentsModule { }
