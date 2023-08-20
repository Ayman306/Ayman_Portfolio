import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  AttackOnTitan_Base_Url = 'https://api.attackontitanapi.com';
  gimmeJoke(): Observable<any> {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

  getAnimeQuotes(): Observable<any> {
    return this.http.get('https://animechan.xyz/api/random');
  }
  attackOnTitanCharecters() {
    return this.http.get(`${this.AttackOnTitan_Base_Url}/characters`);
  }
  // documentation https://www.attackontitanapi.com/docs
}
