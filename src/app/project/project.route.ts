import { Route } from '@angular/router';
import { AllProjectComponent } from './all-project.component';

export default [
  {
    path: 'AnimeProjects',
    loadComponent: () =>
      import('./animeProjects/animeProjects.component').then(
        (c) => c.AnimeProjects
      ),
  },
  {
    path: '',
    component: AllProjectComponent,
  },
] as Route[];
