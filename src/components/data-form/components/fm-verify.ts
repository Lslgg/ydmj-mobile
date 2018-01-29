import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fm-verify',
    templateUrl: 'fm-verify.html'
})
export class FmVerifyComponent{
    @Input() name: string;

    @Input() title: string;

    @Input() type: string;

    @Input() value: string;

    @Input() formInfo:FormGroup;
    
    constructor() { 
        
    }
}