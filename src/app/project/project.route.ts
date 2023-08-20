import { Route } from '@angular/router';
import { AllProjectComponent } from './all-project.component';

export default [
  {
    path: 'AnimeProjects',
    loadChildren: () => import('./animeProjects/animeProject.route'),
  },
  {
    path: '',
    component: AllProjectComponent,
  },
] as Route[];
