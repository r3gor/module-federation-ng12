import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello</h2>
    <p>Hi!</p>
    <p>I'm a remote component, from mfe1</p>
  `,
  styles: [
  ]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
