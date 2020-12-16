import { IStudent } from './../shared/interfaces/IStudent';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  loadStudentList(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${apiUrl}/data/student`);
  }
}
