import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralsModuleRoutingModule } from './referrals-module-routing.module';
import { RefferralsPageComponent } from './refferrals-page/refferrals-page.component';


@NgModule({
  declarations: [
    RefferralsPageComponent
  ],
  imports: [
    CommonModule,
    ReferralsModuleRoutingModule
  ]
})
export class ReferralsModuleModule { }
