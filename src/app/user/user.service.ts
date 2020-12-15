
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/IUser';



const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {


  currentUser: IUser | null;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(private http: HttpClient) { }



  gettUser(id: string): Observable<any> {
    return this.http.get(`${apiUrl}/data/users/${id}`).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }
}
