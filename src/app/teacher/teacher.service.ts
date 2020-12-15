import { IStudent } from './../shared/interfaces/IStudent';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})


export class TeacherService {

  constructor(private http: HttpClient) { }

  addStudent(data: any): Observable<IStudent> {
    return this.http.post<IStudent>(`${apiUrl}/data/student`, data);
  }
}
