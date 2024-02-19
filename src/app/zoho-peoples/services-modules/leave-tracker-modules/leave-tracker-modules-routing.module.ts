import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'view',pathMatch:'full'},
  {path:'view', loadChildren:() => import('./views-module/views-module.module').then(m=>m.ViewsModuleModule)}  ,
  {path:'Compensatory Request', loadChildren:() => import('./compensatory-request-module/compensatory-request-module.module').then(m=>m.CompensatoryRequestModuleModule)} ,
  {path:'leavegrant',loadChildren:()=>import('./leave-grant-module/leave-grant-module.module').then(m=>m.LeaveGrantModuleModule)} ,
  {path:'holidays',loadChildren:()=>import('./holidays-module/holidays-module.module').then(m=>m.HolidaysModuleModule)} ,
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveTrackerModulesRoutingModule { }
