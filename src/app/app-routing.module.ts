import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule)
  },
  {
    path: '',
    redirectTo: 'team',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
