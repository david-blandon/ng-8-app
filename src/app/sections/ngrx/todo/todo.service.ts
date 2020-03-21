import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, AuthResponse } from '../../auth/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
import ToDo from './todo.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private afs: AngularFirestore
  ) { }

  getToDos(): Observable<ToDo[]> {
    return this.http
      .get<any>(
        environment.firebase.databaseURL + '/todos.json'
      )
      .pipe(
        map(response => {
          return Object.keys(response).map(key => response[key]);
        })
      )
  }

  createToDos(todo: ToDo): Observable<ToDo> {
    return this.http
      .post<ToDo>(
        environment.firebase.databaseURL + '/todos.json',
        todo
      )
  }
}
