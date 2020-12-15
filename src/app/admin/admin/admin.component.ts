import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
