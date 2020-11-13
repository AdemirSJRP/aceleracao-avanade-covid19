import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CovidService } from './../../services/covid.service';

import { Observable } from 'rxjs';

import { ITotalBrasil } from 'src/app/shared/interfaces/total-brasil.interface';

@Component({
  selector: 'cov-total-brasil',
  templateUrl: './total-brasil.component.html',
  styleUrls: ['./total-brasil.component.scss']
})
export class TotalBrasilComponent implements OnInit {

  data$: Observable<ITotalBrasil>;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.data$ = this.covidService.currentData$.pipe(
      map(data => {
        const total: ITotalBrasil = {
          cases: data.reduce((a, b) => a + b.cases, 0),
          deaths: data.reduce((a, b) => a + b.deaths, 0),
          refuses: data.reduce((a, b) => a + b.refuses, 0),
          suspects: data.reduce((a, b) => a + b.suspects, 0)
        };
        return total;
      })
    );

  }

}
