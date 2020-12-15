import { IUser } from './../../shared/interfaces/IUser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-all-item',
  templateUrl: './user-all-item.component.html',
  styleUrls: ['./user-all-item.component.css']
})
export class UserAllItemComponent implements OnInit {

  @Input() user: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
