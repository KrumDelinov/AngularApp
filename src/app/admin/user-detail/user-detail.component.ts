import { AdminService } from './../admin.service';
import { IUser } from './../../shared/interfaces/IUser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;
  id: string;

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.id  = this.activatedRoute.snapshot.params.id;
    this.adminService.loadUser(this.id as string).subscribe(user => this.user = user);


    console.log(this.user);
  }

}
