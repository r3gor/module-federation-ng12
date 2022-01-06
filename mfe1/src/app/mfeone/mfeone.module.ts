import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfeoneRoutingModule } from './mfeone-routing.module';
import { HelloComponent } from './hello/hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    MfeoneRoutingModule,
    HttpClientModule,
  ],
  providers: [
  ]
})
export class MfeoneModule { }
