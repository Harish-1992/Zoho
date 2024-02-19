import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'view',pathMatch:'full'},
  {path:'timelogs', loadChildren:() => import('./timelogs-module/timelogs-module.module').then(m=>m.TimelogsModuleModule)}  ,
  {path:'timesheet', loadChildren:() => import('./time-sheet-module/time-sheet-module.module').then(m=>m.TimeSheetModuleModule)} ,
  {path:'projectsJobs',loadChildren:()=>import('./projects-jobs-module/projects-jobs-module.module').then(m=>m.ProjectsJobsModuleModule)} ,
  {path:'Jobschedular',loadChildren:()=>import('./jobschedular-module/jobschedular-module.module').then(m=>m.JobschedularModuleModule)} ,
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackerModulesRoutingModule { }
