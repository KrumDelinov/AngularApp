import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAllComponent } from './users-all/users-all.component';
import { AdminComponent } from './admin/admin.component';
import { UserAllItemComponent } from './user-all-item/user-all-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UsersAllComponent,
    AdminComponent,
    UserAllItemComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  ,
  exports: [
    UsersAllComponent,
    AdminComponent
  ]
})
export class AdminModule { }
