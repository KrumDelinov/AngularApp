import { ProfileComponent } from './user/profile/profile.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UsersAllComponent } from './admin/users-all/users-all.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './core/guards/auth.guatd';


const routes: Routes = [

  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        pathMatch: 'full',
        path: 'home', component: HomeComponent,
        children: [

        ]
      },
      {
        pathMatch: 'full',
        path: 'register', component: RegisterComponent
      },
      {
        pathMatch: 'full',
        path: 'login', component: LoginComponent,
        canActivateChild: [AuthGuard],
        data: {
          isLogged: false,
          title: 'USER LOGIN'
        }
      },
      {
        path: 'user-detail/:id',
        component: UserDetailComponent,
        data: {
          isLogged: true,
          title: 'USER PROFILE'
        }
      },
      {
        pathMatch: 'full',
        path: 'admin', component: AdminComponent,
        canActivateChild: [AuthGuard]
      },
      {
        pathMatch: 'full',
        path: 'user-detail', component: UserDetailComponent,
        canActivateChild: [AuthGuard]
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
