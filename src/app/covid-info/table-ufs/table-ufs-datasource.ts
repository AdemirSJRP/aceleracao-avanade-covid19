import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICovidInfo } from './../../shared/interfaces/covid-info.interface';

/**
 * Data source for the TableUfs view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableUfsDataSource extends DataSource<ICovidInfo> {
  private covidInfoSubject = new BehaviorSubject<ICovidInfo[]>([]);
  data: ICovidInfo[] = [];
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ICovidInfo[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.covidInfoSubject.asObservable(),
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData([...this.data]);
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ICovidInfo[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'cases': return compare(a.cases, b.cases, isAsc);
        case 'deaths': return compare(a.deaths, b.deaths, isAsc);
        case 'refuses': return compare(a.refuses, b.refuses, isAsc);
        case 'state': return compare(a.state, b.state, isAsc);
        case 'suspects': return compare(a.suspects, b.suspects, isAsc);
        default: return 0;
      }
    });
  }

  setData(newData: ICovidInfo[]) {
    this.data = [...newData];
    this.covidInfoSubject.next(this.data);
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
