import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravalPageComponent } from './traval-page/traval-page.component';

const routes: Routes = [
  {path:'travel',component:TravalPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelModuleRoutingModule { }
