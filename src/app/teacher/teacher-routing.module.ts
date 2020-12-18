import { HomeComponent } from './../home/home.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guatd';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';

const routes: Routes = [
  {
    path: 'student',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TeacherHomeComponent,
        data: {
          title: 'TEACHER',
          isLogged: true
        }
      },
      {
        path: 'new',
        component: NewStudentComponent,
        data: {
          title: 'NEW Student',
          isLogged: true
        }
      }
    ]
  }
];

export const TeacherRouterModule = RouterModule.forChild(routes);
