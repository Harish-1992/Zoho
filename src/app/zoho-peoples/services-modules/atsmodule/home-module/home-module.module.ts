import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { AtshomeComponent } from './atshome/atshome.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AtshomeComponent,

  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    FormsModule

  ]
})
export class HomeModuleModule { }
