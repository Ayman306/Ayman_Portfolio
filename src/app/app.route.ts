import { Routes } from '@angular/router';
export const App_Route: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/page.route'),
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.route'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./utility/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];
