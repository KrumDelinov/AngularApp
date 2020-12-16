import { TeacherRoutes } from './teacher.routing';

import { TeacherService } from './teacher.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStudentComponent } from './new-student/new-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';



@NgModule({
  declarations: [NewStudentComponent, TeacherHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TeacherRoutes
  ],
  providers: [
    TeacherService
  ],
  exports: [
    NewStudentComponent,
    TeacherHomeComponent
  ]
})
export class TeacherModule { }
