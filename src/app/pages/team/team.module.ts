import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { MembersComponent } from './members/members.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { PowerstatsComponent } from './powerstats/powerstats.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { RequirementAlertsComponent } from './requirement-alerts/requirement-alerts.component';


@NgModule({
  declarations: [
    TeamComponent,
    MembersComponent,
    TeamStatsComponent,
    PowerstatsComponent,
    AddHeroComponent,
    RequirementAlertsComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    AlertModule
  ]
})
export class TeamModule { }
