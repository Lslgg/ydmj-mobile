import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { Search } from './search';
import { SortPopover } from './sortPopover';



@NgModule({
    declarations: [
        Search,
        SortPopover
    ],
    imports: [
        IonicModule,
    ],
    entryComponents: [
        Search,
        SortPopover
    ],
    exports: [
        Search,
        SortPopover
    ]
})
export class SearchModule { }
