import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'team',
    pathMatch: 'full'
  },
  {
    path: 'team',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
