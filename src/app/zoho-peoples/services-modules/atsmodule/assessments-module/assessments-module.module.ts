import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentsModuleRoutingModule } from './assessments-module-routing.module';
import { AssessmentsPageComponent } from './assessments-page/assessments-page.component';
import { JobOpeningsPageComponent } from '../job-openings-module/job-openings-page/job-openings-page.component';


@NgModule({
  declarations: [
    AssessmentsPageComponent,
    JobOpeningsPageComponent
  ],
  imports: [
    CommonModule,
    AssessmentsModuleRoutingModule
  ]
})
export class AssessmentsModuleModule { }
