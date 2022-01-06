import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Hello World!, from MFE1 (not exposed) </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'mfe1';
}
