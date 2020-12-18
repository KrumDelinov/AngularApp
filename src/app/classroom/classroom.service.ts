import { tap } from 'rxjs/operators';
import { IStudent } from './../shared/interfaces/IStudent';
import { IClassRoom } from './../shared/interfaces/IClassRoom';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  classroom: IClassRoom;

  constructor(private http: HttpClient) { }

  loadClassRoomList(): Observable<IClassRoom[]> {
    return this.http.get<IClassRoom[]>(`${apiUrl}/data/classroom`);
  }
}


