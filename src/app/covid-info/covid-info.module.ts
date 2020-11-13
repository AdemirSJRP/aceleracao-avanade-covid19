import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { CovidInfoRoutingModule } from './covid-info-routing.module';
import { CovidInfoComponent } from './covid-info.component';
import { TableUfsComponent } from './table-ufs/table-ufs.component';
import { SelectDateComponent } from './select-date/select-date.component';
import { TotalBrasilComponent } from './total-brasil/total-brasil.component';


@NgModule({
  declarations: [CovidInfoComponent, TableUfsComponent, SelectDateComponent, TotalBrasilComponent],
  imports: [
    CommonModule,
    SharedModule,
    CovidInfoRoutingModule,
  ]
})
export class CovidInfoModule { }
