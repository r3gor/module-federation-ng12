import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <p>Navigation: </p>
    <a pButton href="/remote"> Remote</a>
    <a pButton href="/" style="margin-left: 8px;"> Home</a>
  `,
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
