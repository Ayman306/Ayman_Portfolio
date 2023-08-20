import { Routes } from '@angular/router';
import { PageComponent } from './Pages/page.component';
import { ApiService } from './service/api.service';

export const App_Route: Routes = [
  {
    path: '',
    component: PageComponent,
    loadChildren: () => import('./Pages/page.route'),
  },
];
