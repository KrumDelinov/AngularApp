
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { PageheadingComponent } from './pageheading/pageheading.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guatd';




@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    PageheadingComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageheadingComponent
  ]
})
export class CoreModule { }
