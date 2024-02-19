import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDosModuleRoutingModule } from './to-dos-module-routing.module';
import { TodosPageComponent } from './todos-page/todos-page.component';


@NgModule({
  declarations: [
    TodosPageComponent
  ],
  imports: [
    CommonModule,
    ToDosModuleRoutingModule
  ]
})
export class ToDosModuleModule { }
