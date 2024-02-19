import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



  const routes: Routes = [
    {path:'',redirectTo:'view',pathMatch:'full'},
    {path:'views', loadChildren:() => import('./views-module/views-module.module').then(m=>m.ViewsModuleModule)}  ,
    {path:'myreuest', loadChildren:() => import('./myreuest-module/myreuest-module.module').then(m=>m.MyreuestModuleModule)} ,
    {path:'my-approval',loadChildren:()=>import('./my-approval-module/my-approval-module.module').then(m=>m.MyApprovalModuleModule)} ,
    {path:'shift',loadChildren:()=>import('./shift-module/shift-module.module').then(m=>m.ShiftModuleModule)} ,
    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceModulesRoutingModule { }
