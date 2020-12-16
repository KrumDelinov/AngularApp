import { RouterModule } from '@angular/router';
import { ClassroomService } from './classroom.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllClassroomComponent } from './all-classroom/all-classroom.component';



@NgModule({
  declarations: [AllClassroomComponent],
  imports: [
    CommonModule,
    RouterModule
  ],

  providers: [
    ClassroomService
  ],
  exports: [
    AllClassroomComponent
  ]
})
export class ClassroomModule { }
