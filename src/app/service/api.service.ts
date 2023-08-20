import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  gimmeJoke(): Observable<any> {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

  getAnimeFacts(): Observable<any> {
    return this.http.get('https://nekos.best/api/v2/neko');
  }
}
