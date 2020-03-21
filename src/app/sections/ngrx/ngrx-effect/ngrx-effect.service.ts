import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ShoppingItem } from '../ngrx-basic/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class NgRxEffectService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ShoppingItem[]> {
    return this.http
      .get<any>(
        environment.firebase.databaseURL + '/shoppinglist.json'
      )
      .pipe(
        map(response => {
          return Object.keys(response).map(key => response[key]);
        })
      )
  }

  create(todo: ShoppingItem): Observable<ShoppingItem> {
    return this.http
      .post<ShoppingItem>(
        environment.firebase.databaseURL + '/shoppinglist.json',
        todo
      )
  }
}
