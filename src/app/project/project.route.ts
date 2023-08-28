import { Route } from '@angular/router';
import { AllProjectComponent } from './all-project.component';

export default [
  {
    path: 'AnimeProjects',
    loadChildren: () => import('./animeProjects/animeProject.route'),
  },
  {
    path:'Pexels',
    loadComponent:()=> import('./pexels/pexels.component').then(c=>c.PexelsComponent)
  },
  {
    path: '',
    component: AllProjectComponent,
  },
] as Route[];
