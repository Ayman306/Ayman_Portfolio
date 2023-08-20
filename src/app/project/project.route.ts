import { Route } from '@angular/router';
import { AllProjectComponent } from './all-project.component';

export default [
  {
    path: 'AnimeFact',
    loadComponent: () =>
      import('./random-anime-fact/random-anime-fact.component').then(
        (c) => c.RandomAnimeFactComponent
      ),
  },
  {
    path: '',
    component: AllProjectComponent,
  },
] as Route[];
