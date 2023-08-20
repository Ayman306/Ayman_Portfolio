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
    path: 'project',
    loadChildren: () => import('../project/project.route'),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./resume/resume.component').then((c) => c.ResumeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
] as Route[];
