import { UserService } from './../user.service';
import { IUser } from './../../shared/interfaces/IUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  id = 'D58271DC-E83C-4C5D-86AC-AE24773CFD9A';

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    console.log(this.id as string);
    this.userService.gettUser(this.id).subscribe(user => this.user = user);
    console.log(this.user);
  }

}
