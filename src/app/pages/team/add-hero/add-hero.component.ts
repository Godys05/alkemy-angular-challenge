import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateBack(): void {
    this.router.navigate(['team']);
  }

}
