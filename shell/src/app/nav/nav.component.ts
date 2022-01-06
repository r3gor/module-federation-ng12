import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <p>Navigation: </p>
    <a href="/remote"> Remote</a>
    <a href="/"> Home</a>
  `,
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
