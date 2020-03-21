import { Injectable } from '@angular/core';
import { Subject, Observable, of, from } from 'rxjs';
import { delay, take, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ObservableOperatorvice {

  constructor(
    private http: HttpClient
  ) { }


  getNumber(): Observable<any> {

    return from([1, 2, 3, 4, 5, 6]).pipe(
      tap(data => {
        console.log(data)
      }),
      take(3),
      delay(1000),
      map(data => {
        return {
          id: data
        };
      })
    )
  }

  search(term: string): any {
    return this.http.get<any>('https://itunes.apple.com/search?term=' + term + '&media=music&limit=20');
  }

}
