import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtshomeComponent } from './atshome/atshome.component';


const routes: Routes = [
  {path:'', redirectTo:'atshomepage', pathMatch:'full'},
  {path:'atshomepage',component:AtshomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
