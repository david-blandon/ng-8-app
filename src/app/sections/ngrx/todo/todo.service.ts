import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, AuthResponse } from '../../auth/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import ToDo from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getToDos(): Observable<ToDo[]> {
    return this.http
      .get<ToDo[]>(
        environment.firebase.rest + 'todos.json'
      )
  }

  createToDos(todo: ToDo): Observable<ToDo> {
    return this.http
      .post<ToDo>(
        environment.firebase.rest + 'todos.json',
        todo
      )
  }
}
