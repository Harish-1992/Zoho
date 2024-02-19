import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'services',pathMatch:'full'},
  {path:'services',loadChildren:()=> import('./services-modules/services-modules.module').then(m =>m.ServicesModulesModule)},
  {path:'travelRequest',loadChildren:()=> import('./travel-module/travel-module.module').then(m =>m.TravelModuleModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZohoPeoplesRoutingModule { }
