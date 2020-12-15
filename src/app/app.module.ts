
import { AdminModule } from './admin/admin.module';

import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { AsideComponent } from './core/aside/aside.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { TeacherModule } from './teacher/teacher.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    AdminModule,
    TeacherModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
