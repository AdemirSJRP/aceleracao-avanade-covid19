import { CovidService } from './../../services/covid.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableUfsDataSource } from './table-ufs-datasource';

import { ICovidInfo } from './../../shared/interfaces/covid-info.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'cov-table-ufs',
  templateUrl: './table-ufs.component.html',
  styleUrls: ['./table-ufs.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(1000)]),
      transition(':leave', [style({ opacity: 0 }), animate(1000)]),
    ])
  ]
})
export class TableUfsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ICovidInfo>;
  dataLoaded = false;
  dataSource: TableUfsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['state', 'cases', 'deaths', 'suspects', 'refuses'];
  isLoading = false;

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.dataSource = new TableUfsDataSource();
    this.covidService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  loadData(date: string) {
    this.dataLoaded = true;
    this.covidService.getInfo(date).subscribe(data => this.dataSource.setData(data));
  }
}
