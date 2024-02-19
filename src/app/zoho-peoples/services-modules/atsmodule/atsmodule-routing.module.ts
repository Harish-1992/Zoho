import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'atshome',pathMatch:'full'},
  {path:'atshome', loadChildren:() => import('./home-module/home-module.module').then(m=>m.HomeModuleModule)}  ,
  {path:'my-action', loadChildren:() => import('./my-action-module/my-action-module.module').then(m=>m.MyActionModuleModule)} ,
  {path:'job-openings',loadChildren:()=>import('./job-openings-module/job-openings-module.module').then(m=>m.JobOpeningsModuleModule)} ,
  {path:'Candidates',loadChildren:()=>import('./candidates-module/candidates-module.module').then(m=>m.CandidatesModuleModule)} ,
  {path:'referrals',loadChildren:()=>import('./referrals-module/referrals-module.module').then(m=>m.ReferralsModuleModule)} ,
  {path:'assessments',loadChildren:()=>import('./assessments-module/assessments-module.module').then(m=>m.AssessmentsModuleModule)} ,
  {path:'to-dos',loadChildren:()=>import('./to-dos-module/to-dos-module.module').then(m=>m.ToDosModuleModule)} ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ATSModuleRoutingModule { }
