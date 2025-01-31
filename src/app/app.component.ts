import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
<!-- app.component.html -->
<app-menu></app-menu>


export class AppComponent {
  value = 'World; This is Angular 2!';
}
