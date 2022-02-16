import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges {

  heroes: any[] = [];
  modalDisplay = 'none';
  selectedHero: any;

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.team$.subscribe((value: any) => {
      this.heroes = value;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  deleteHero(heroId: string): void {
    this.heroes = this.heroes.filter((hero: any) => hero.id !== heroId);
    this.dataService.setTeam(this.heroes);
  }

  navigateToAddHero(): void {
    this.router.navigate(['team', 'heroes', 'add']);
  }

  openHeroDetail(heroId: string): void {
    this.modalDisplay = 'block';
    this.selectedHero = this.heroes.find(hero => hero.id === heroId);
  }

  closeHeroDetail(): void {
    this.modalDisplay = 'none';
  }

}
