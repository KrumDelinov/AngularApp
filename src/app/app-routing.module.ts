import { AllStudentComponent } from './student/all-student/all-student.component';
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
import { NewStudentComponent } from './teacher/new-student/new-student.component';
import { pathToFileURL } from 'url';
import { AllClassroomComponent } from './classroom/all-classroom/all-classroom.component';


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
        path: 'home/all-users',
        component: UsersAllComponent,
        data: {
          isLogged: true,
          title: 'USER PROFILE'
        }
      },
      {
        path: 'home/all-students',
        component: AllStudentComponent,
        data: {
          isLogged: true,
          title: 'ALL STUDENTS'
        }
      },
      {
        path: 'home/all-classrooms',
        component: AllClassroomComponent,
        data: {
          isLogged: true,
          title: 'ALL CLASSROOMS'
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
      },
      {
        path: 'home/new',
        component: NewStudentComponent,
        data: {
          title: 'NEW STUDENT',
          isLogged: true
        }
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
