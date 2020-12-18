import { RouterModule } from '@angular/router';
import { ClassroomService } from './classroom.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';



@NgModule({
  declarations: [
    AllComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ClassroomService
  ],
  exports: [
    AllComponent
  ]
})
export class ClassroomModule { }
