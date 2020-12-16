import { IClassRoom } from './../../shared/interfaces/IClassRoom';
import { StudentService } from './../student.service';
import { IStudent } from './../../shared/interfaces/IStudent';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  @Input() student: IStudent;

  studentList: IStudent[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    this.studentService.loadStudentList().subscribe(studentList => this.studentList = studentList);
  }

}
