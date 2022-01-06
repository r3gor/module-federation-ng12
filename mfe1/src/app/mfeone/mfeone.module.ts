import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfeoneRoutingModule } from './mfeone-routing.module';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    MfeoneRoutingModule
  ]
})
export class MfeoneModule { }
