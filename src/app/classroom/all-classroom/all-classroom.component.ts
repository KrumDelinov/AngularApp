import { ClassroomService } from './../classroom.service';
import { IClassRoom } from './../../shared/interfaces/IClassRoom';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-classroom',
  templateUrl: './all-classroom.component.html',
  styleUrls: ['./all-classroom.component.css']
})
export class AllClassroomComponent implements OnInit {

  @Input() classroom: IClassRoom;

  classroomList: IClassRoom[];

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.classroomService.loadClassRoomList().subscribe(classroomList => this.classroomList = classroomList);
  }

}
