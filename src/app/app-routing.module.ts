import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'',redirectTo:'peoples',pathMatch:'full'},
  {path:'peoples',loadChildren:()=> import('./zoho-peoples/zoho-peoples.module').then(m =>m.ZohoPeoplesModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
