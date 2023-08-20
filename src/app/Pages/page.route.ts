import { Route } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

export default [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.component').then((c) => c.ProjectsComponent),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
] as Route[];
