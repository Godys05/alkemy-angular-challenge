import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
//   heroes = [
//   {
//   "response": "success",
//   "id": "70",
//   "name": "Batman",
//   "powerstats": {
//     "intelligence": "100",
//     "strength": "26",
//     "speed": "27",
//     "durability": "50",
//     "power": "47",
//     "combat": "100"
//   },
//   "biography": {
//     "full-name": "Bruce Wayne",
//     "alter-egos": "No alter egos found.",
//     "aliases": [
//       "Insider",
//       "Matches Malone"
//     ],
//     "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
//     "first-appearance": "Detective Comics #27",
//     "publisher": "DC Comics",
//     "alignment": "good"
//   },
//   "appearance": {
//     "gender": "Male",
//     "race": "Human",
//     "height": [
//       "6'2",
//       "188 cm"
//     ],
//     "weight": [
//       "210 lb",
//       "95 kg"
//     ],
//     "eye-color": "blue",
//     "hair-color": "black"
//   },
//   "work": {
//     "occupation": "Businessman",
//     "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
//   },
//   "connections": {
//     "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
//     "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
//   },
//   "image": {
//     "url": "httpss://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
//   }
// },
// {
//   "response": "success",
//   "id": "71",
//   "name": "Batman",
//   "powerstats": {
//     "intelligence": "100",
//     "strength": "26",
//     "speed": "27",
//     "durability": "50",
//     "power": "47",
//     "combat": "100"
//   },
//   "biography": {
//     "full-name": "Bruce Wayne",
//     "alter-egos": "No alter egos found.",
//     "aliases": [
//       "Insider",
//       "Matches Malone"
//     ],
//     "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
//     "first-appearance": "Detective Comics #27",
//     "publisher": "DC Comics",
//     "alignment": "good"
//   },
//   "appearance": {
//     "gender": "Male",
//     "race": "Human",
//     "height": [
//       "6'2",
//       "188 cm"
//     ],
//     "weight": [
//       "210 lb",
//       "95 kg"
//     ],
//     "eye-color": "blue",
//     "hair-color": "black"
//   },
//   "work": {
//     "occupation": "Businessman",
//     "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
//   },
//   "connections": {
//     "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
//     "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
//   },
//   "image": {
//     "url": "httpss://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
//   }
// }
// ];

  heroes: any[] = [];

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.heroes = this.dataService.getTeam();
    this.dataService.team$.subscribe((value: any) => {
      this.heroes = value;
    });
  }

  deleteHero(heroId: string): void {
    this.heroes = this.heroes.filter((hero: any) => hero.id !== heroId);
    this.dataService.setTeam(this.heroes);
  }

  navigateToAddHero(): void {
    this.router.navigate(['team', 'heroes', 'add']);
  }

}
