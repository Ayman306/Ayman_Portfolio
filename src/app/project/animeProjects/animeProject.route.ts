import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./animeProjects.component').then((c) => c.AnimeProjects),
  },
  {
    path: 'AttackOnTitan',
    loadComponent: () =>
      import('./attack-on-titan/attack-on-titan.component').then(
        (c) => c.AttackOnTitanComponent
      ),
  },
] as Route;
