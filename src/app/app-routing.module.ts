import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'covid-info',
    loadChildren: () => import('./covid-info/covid-info.module').then(m => m.CovidInfoModule)
  },
  {
    path: '',
    redirectTo: '/covid-info',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
