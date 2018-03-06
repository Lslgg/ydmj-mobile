import { Component,Input,ContentChildren,QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FmItemComponent } from './fm-item';

@Component({
    selector: 'fm-group',
    templateUrl: 'fm-group.html'
})

export class FmGroupComponent{

    @Input() formInfo:FormGroup;

    @Input() name:string;

    @ContentChildren(FmItemComponent) flist: QueryList<FmItemComponent>;
    
    constructor() { }
}