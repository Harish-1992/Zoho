import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', loadChildren:() => import('./home-module/home-module.module').then(m=>m.HomeModuleModule)}  ,
  {path:'trips', loadChildren:() => import('./trips-module/trips-module.module').then(m=>m.TripsModuleModule)} ,
  {path:'expenses',loadChildren:()=>import('./expenses-module/expenses-module.module').then(m=>m.ExpensesModuleModule)} ,
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseTrackerModuleRoutingModule { }
