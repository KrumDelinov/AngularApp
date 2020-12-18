import { IStudent } from './../../shared/interfaces/IStudent';
import { ClassroomService } from './../classroom.service';
import { IClassRoom } from './../../shared/interfaces/IClassRoom';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {



  classList: IClassRoom[];
  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {

    this.classroomService.loadClassRoomList().subscribe(classList => this.classList = classList);
    console.log(this.classList);
  }

}
