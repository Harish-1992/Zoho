import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelModuleRoutingModule } from './travel-module-routing.module';
import { TravalPageComponent } from './traval-page/traval-page.component';


@NgModule({
  declarations: [
    TravalPageComponent
  ],
  imports: [
    CommonModule,
    TravelModuleRoutingModule
  ]
})
export class TravelModuleModule { }
