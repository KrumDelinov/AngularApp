import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TeacherHomeComponent,
        data: {
          title: 'THEME'
        }
      },
      {
        path: 'new',
        component: NewStudentComponent,
        data: {
          title: 'NEW STUDENT',
          isLogged: true
        }
      }
    ]
   }

];

export const TeacherRoutes = RouterModule.forChild(routes);
