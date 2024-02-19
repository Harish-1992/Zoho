import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyActionModuleRoutingModule } from './my-action-module-routing.module';
import { MyactionPageComponent } from './myaction-page/myaction-page.component';


@NgModule({
  declarations: [
    MyactionPageComponent
  ],
  imports: [
    CommonModule,
    MyActionModuleRoutingModule
  ]
})
export class MyActionModuleModule { }
