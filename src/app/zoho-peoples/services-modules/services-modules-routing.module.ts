
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'ats',pathMatch:'full'},
  {path:'ats', loadChildren:() => import('./atsmodule/atsmodule.module').then(m=>m.ATSModule)},
  {path:'connect',loadChildren:() => import('./connect-module/connect-module.module').then(m =>m.ConnectModule)},
  {path:'expense',loadChildren:() => import('./expense-tracker-module/expense-tracker-module.module').then(m =>m.ExpenseTrackerModule)},
  {path:'payroll',loadChildren:() => import('./payroll-module/payroll-module.module').then(m =>m.PayrollModule)},
  {path:'leave-tracker',loadChildren:() => import('./leave-tracker-modules/leave-tracker-modules.module').then(m =>m.LeaveTrackerModules)},
  {path:'time-tracker',loadChildren:() => import('./time-tracker-modules/time-tracker-modules.module').then(m =>m.TimeTrackerModules)},
  {path:'attendance',loadChildren:() => import('./attendance-modules/attendance-modules.module').then(m =>m.AttendanceModules)},
  {path:'perfomance',loadChildren:() => import('./perfomance-modules/perfomance-modules.module').then(m =>m.PerfomanceModules)},
  {path:'files',loadChildren:() => import('./files-module/files-module.module').then(m =>m.FilesModule)},
  {path:'Travel',loadChildren:() => import('./travel-module/travel-module.module').then(m =>m.TravelModule)},
  {path:'compensation',loadChildren:() => import('./compensation-module/compensation-module.module').then(m =>m.CompensationModule)},
  {path:'cases',loadChildren:() => import('./cases-module/cases-module.module').then(m =>m.CasesModuleModule)},
  //{path:'announcement',loadChildren:() => import('./announcement-module/announcement-module').then(m =>m.AnnouncementModuleModule)},
  {path:'LMS',loadChildren:() => import('./lmsmodule/lmsmodule.module').then(m =>m.LMSModuleModule)},
  {path:'hrletters',loadChildren:() => import('./hrletters-module/hrletters-module.module').then(m =>m.HRLettersModule)},
  {path:'probation-life-cycle',loadChildren:() => import('./probation-life-cycle-module/probation-life-cycle-module.module').then(m =>m.ProbationLifeCycleModuleModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesModulesRoutingModule { }
