import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe({
        next: (res) => {
          console.log(":: Mock API Response ::");
          console.log(res);
        }
      })
  }

  ngOnInit(): void {
  }

}
