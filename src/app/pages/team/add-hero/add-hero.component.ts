import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  searchForm: FormGroup;
  foundHeroes: any[];

  constructor(private router: Router,
              private dataService: DataService,
              private heroService: HeroService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  navigateBack(): void {
    this.router.navigate(['team']);
  }

  onAddHero(heroId: string): void {
    const team = this.dataService.getTeam();
    if (team) {
      this.dataService.setTeam([...team, this.foundHeroes.find(hero => hero.id === heroId) ]);
    }
    else {
      this.dataService.setTeam([this.foundHeroes.find(hero => hero.id === heroId)]);
    }
  }

  searchHeroes(): void {
    if (this.searchForm.valid) {
      const {name} = this.searchForm.value;
      this.heroService.getHeroByName(name).subscribe((res) => {
        this.foundHeroes = res.results ? res.results : [];
      })
    }
  }

}
