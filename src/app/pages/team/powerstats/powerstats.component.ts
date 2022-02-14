import { Component, Input, OnInit } from '@angular/core';
import Powerstats from './powerstats.definition';

@Component({
  selector: 'app-powerstats',
  templateUrl: './powerstats.component.html',
  styleUrls: ['./powerstats.component.scss']
})
export class PowerstatsComponent implements OnInit {
  @Input() powerstats: Powerstats;

  constructor() { }

  ngOnInit(): void {
  }

}
