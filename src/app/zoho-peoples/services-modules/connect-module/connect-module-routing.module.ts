import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',redirectTo:'feeds',pathMatch:'full'},
{path:'feeds', loadChildren:() => import('./feeds-module/feeds-module.module').then(m=>m.FeedsModule)}  ,
{path:'gropus', loadChildren:() => import('./groups-module/groups-module.module').then(m=>m.GroupsModuleModule)} ,
{path:'task',loadChildren:()=>import('./task-module/task-module.module').then(m=>m.TaskModuleModule)} ,
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectModuleRoutingModule { }
