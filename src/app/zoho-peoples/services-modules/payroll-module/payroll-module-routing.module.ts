import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', loadChildren:() => import('./home-module/home-module.module').then(m=>m.HomeModuleModule)}  ,
  {path:'salary', loadChildren:() => import('./salary-details-module/salary-details-module.module').then(m=>m.SalaryDetailsModuleModule)} ,
  {path:'investments',loadChildren:()=>import('./investments-module/investments-module.module').then(m=>m.InvestmentsModuleModule)} ,
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollModuleRoutingModule { }
