import { Component } from '@angular/core';

@Component({
  selector: 'data-form',
  templateUrl: 'data-form.html'
})
export class DataFormComponent {

  text: string;

  constructor() {
    console.log('Hello DataFormComponent Component');
    this.text = 'Hello World';
  }

}
