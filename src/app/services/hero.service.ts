import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // endpoint = `${environment.API_URL}/${environment.API_KEY}`;
  endpoint = `http://localhost:4200/api`;

  constructor(private http: HttpClient) { }

  getHeroById(heroId: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${heroId}`)
  }

  getHeroByName(heroName: string): Observable<any> {
    return this.http.get(`${this.endpoint}/search/${heroName}`);
  }
}
