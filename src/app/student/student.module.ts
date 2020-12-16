import { StudentService } from './student.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentComponent } from './all-student/all-student.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllStudentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    StudentService
  ],
  exports: [
    AllStudentComponent
  ]
})
export class StudentModule { }
