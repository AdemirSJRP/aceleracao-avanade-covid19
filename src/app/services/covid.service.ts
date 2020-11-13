import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';

import { ICovidInfo } from '../shared/interfaces/covid-info.interface';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private currentData = new BehaviorSubject<ICovidInfo[]>([]);
  private isLoading = new BehaviorSubject<boolean>(false);

  currentData$ = this.currentData.asObservable();
  isLoading$ = this.isLoading.asObservable();

  constructor(private httpClient: HttpClient) { }

  getInfo(date: string): Observable<ICovidInfo[]> {
    this.isLoading.next(true);
    return this.httpClient
      .get<{ data: ICovidInfo[] }>(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${date}`, { observe: 'body' })
      .pipe(
        tap(response => this.currentData.next(response.data || [])),
        map(response => response.data || []),
        finalize(() => this.isLoading.next(false))
      );
  }
}
