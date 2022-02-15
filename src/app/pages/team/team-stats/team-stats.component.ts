import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Powerstats from '../powerstats/powerstats.definition';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss']
})
export class TeamStatsComponent implements OnInit, OnChanges {
  @Input() heroes: any[] = [];
  powerstats: Powerstats | any;
  definitiveStat = '';

  constructor() { }

  ngOnInit(): void {
    this.getTotalStats();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getTotalStats();
  }

  getTotalStats(): void {
    let totalPowerstats = this.heroes.map(hero => hero.powerstats);
    let stats: Powerstats = {
      intelligence: "0",
      strength: "0",
      speed: "0",
      durability: "0",
      power: "0",
      combat: "0",
    }
    this.powerstats = totalPowerstats.reduce((prev, current) => {
      return {
        intelligence: (parseInt(prev.intelligence) + parseInt(current.intelligence)).toString(),
        strength: (parseInt(prev.strength) + parseInt(current.strength)).toString(),
        speed: (parseInt(prev.speed) + parseInt(current.speed)).toString(),
        durability: (parseInt(prev.durability) + parseInt(current.durability)).toString(),
        power: (parseInt(prev.power) + parseInt(current.power)).toString(),
        combat: (parseInt(prev.combat) + parseInt(current.combat)).toString(),
      };
    }, stats);
    
    this.getDefinitiveStat();
  }

  getDefinitiveStat(): void {
    let currentStat: any = 'intelligence';

    Object.keys(this.powerstats).forEach(key => {
      if ( parseInt(this.powerstats[currentStat]) < parseInt(this.powerstats[key])) {
        currentStat = key;
      }
    });

    this.definitiveStat = currentStat;
  }
}
