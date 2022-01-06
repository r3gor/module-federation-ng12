import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> MFE App - Module Federation </h1>
    <p> I'm Shell </p>
    <hr>
    <app-nav></app-nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'shell';
}
