import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/IUser';


const apiUrl = environment.apiUrl;

const some = [];

@Injectable()
export class AuthService {


  // tslint:disable-next-line: variable-name
  private _currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject(undefined);
  currentUser$ = this._currentUser.asObservable();
  isLogged$ = this.currentUser$.pipe(map(user => !!user));
  isReady$ = this.currentUser$.pipe(map(user => user !== undefined));
  role$ = this.currentUser$.pipe(map(role => role));
  id$ = this.currentUser$.pipe(map(objectId => objectId));

  some = Object.values(this.id$);

  constructor(private http: HttpClient) { }

  updateCurrentUser(user: IUser | null): void {
    this._currentUser.next(user);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/users/login`, data, {observe: 'body'}).pipe(
      tap((user: IUser) => this._currentUser.next(user))
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/users/register`, data).pipe(
      tap((user: IUser) => this._currentUser.next(user))
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${apiUrl}/users/logout`, {}).pipe(
      tap((user: IUser) => this._currentUser.next(null))
    );
  }



  authenticate(): Observable<any> {
    return this.http.get(`${apiUrl}/data/users/${some[0]}`).pipe(
      tap((user: IUser) => this._currentUser.next(user)),
      catchError(() => {
        this._currentUser.next(null);
        return [null];
      })
    );
  }
}

