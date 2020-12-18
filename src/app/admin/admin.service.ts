import { IUser } from './../shared/interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(private http: HttpClient) { }

  loadUsersList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${apiUrl}/data/users`);
  }

  loadUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${apiUrl}/data/users/${id}`);
  }
}
