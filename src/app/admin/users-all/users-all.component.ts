import { AuthService } from 'src/app/core/auth.service';
import { AdminService } from './../admin.service';
import { IUser } from './../../shared/interfaces/IUser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css']
})
export class UsersAllComponent implements OnInit {

  isLogged$ = this.authService.isLogged$;
  @Input() user: IUser;

  userList: IUser[];
  constructor(private adminService: AdminService, private authService: AuthService) { }

  ngOnInit(): void {
    this.adminService.loadUsersList().subscribe(userList => this.userList = userList);

  }

}
