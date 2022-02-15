import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  team = new BehaviorSubject<any[]>([]);
  team$ = this.team.asObservable();

  constructor() { }

  setTeam(newTeam: any[]) {
    const stringifiedTeam =  JSON.stringify(newTeam)
    localStorage.setItem('team', stringifiedTeam);
    this.team.next(newTeam);
  }

  getTeam() {
    return localStorage.getItem('team') ? JSON.parse(localStorage.getItem('team')!) : null;
  }
}
