import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'user-search', pathMatch: 'full' },
  {
    path: 'user-search',
    loadComponent: () =>
      import('./features/user-search/user-search.component').then(
        (cmp) => cmp.UserSearchComponent
      ),
  },
];
