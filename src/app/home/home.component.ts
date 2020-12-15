import { async } from '@angular/core/testing';
import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  isLogged$ = this.authService.isLogged$;

  role = this.authService.role$;
  cu = this.authService.currentUser$;
  url: string;

  constructor(
    private authService: AuthService,
    router: Router
  ) {

    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      this.url = e.url;
    });
  }

  ngOnInit(): void {

  }

}

