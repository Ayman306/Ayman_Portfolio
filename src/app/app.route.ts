import { Routes } from '@angular/router';
import { PageComponent } from './Pages/page.component';
import { ApiService } from './service/api.service';

export const App_Route: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/page.route'),
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.route'),
  },
];
