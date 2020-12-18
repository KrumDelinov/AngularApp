import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogged$ = this.authService.isLogged$;
  currentUser$ = this.authService.currentUser$;
  id$ = this.authService.id$;

  url: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      this.url = e.url;
    });
  }

  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['login']));

  }

}
