import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-requirement-alerts',
  templateUrl: './requirement-alerts.component.html',
  styleUrls: ['./requirement-alerts.component.scss']
})
export class RequirementAlertsComponent implements OnInit, OnDestroy {
  heroes: any = [];
  subscriptions: Subscription = new Subscription();
  goodCount = 0;
  badCount = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.heroes = this.dataService.getTeam();
    this.subscriptions.add(this.dataService.team$.subscribe(value => {
      this.heroes = value;
      this.getBalanceCount();
    }));
  }

  getBalanceCount(): void {
    this.goodCount = 0;
    this.badCount = 0;
    this.heroes.forEach((hero: any) => {
      hero.biography.alignment === 'good' ? this.goodCount++ : this.badCount++;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
