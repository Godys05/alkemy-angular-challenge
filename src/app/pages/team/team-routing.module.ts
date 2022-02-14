import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { TeamComponent } from './team.component';

const routes: Routes = [
  { path: '', component: TeamComponent },
  { path: 'heroes/add', component: AddHeroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
