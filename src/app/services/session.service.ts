import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  endpoint = environment.LOGIN_ENDPOINT;
  private token = new BehaviorSubject<string | null>(this.isLogged());
  token$ = this.token.asObservable();

  constructor(private http: HttpClient) { }

  async login(user: any) {
    try {
      console.log(user);
      const res: any = await this.http.post(this.endpoint, user).toPromise();
      
      if (res.token) {
        localStorage.setItem('login', res.token);
        this.token.next(res.token);
      }
      
    }
    catch(error) {
      console.log(error);
    }
  }

  isLogged() {
    return localStorage.getItem('login');
  }
}
