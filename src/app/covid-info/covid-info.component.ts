import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TableUfsComponent } from './table-ufs/table-ufs.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { dateToString } from '../shared/utils/date';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'cov-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.scss']
})
export class CovidInfoComponent implements OnInit {

  date = new Date();
  hasData$: Observable<boolean>;

  @ViewChild('compTableUfs', { static: false }) compTableUfs: TableUfsComponent;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.hasData$ = this.covidService.currentData$.pipe(
      map(data => data.length > 0)
    );
  }

  loadData(date: Date) {
    this.compTableUfs.loadData(dateToString(date));
  }

}
