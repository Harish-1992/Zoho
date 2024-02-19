import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesModuleRoutingModule } from './candidates-module-routing.module';
import { CandidatesPageComponent } from './candidates-page/candidates-page.component';


@NgModule({
  declarations: [
    CandidatesPageComponent
  ],
  imports: [
    CommonModule,
    CandidatesModuleRoutingModule
  ]
})
export class CandidatesModuleModule { }
