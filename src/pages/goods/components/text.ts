import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'home-text',
    templateUrl: 'text.html'
})
export class TextComponent implements OnInit {
    @Input() title: String = '';
    @Input() content: String = '';
    constructor() { }

    ngOnInit() { }

}