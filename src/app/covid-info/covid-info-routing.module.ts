import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidInfoComponent } from './covid-info.component';

const routes: Routes = [{ path: '', component: CovidInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidInfoRoutingModule { }
