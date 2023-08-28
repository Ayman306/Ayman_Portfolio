import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
    this.pexelHeader = new HttpHeaders({
      'Authorization': `${environment.PEXELS_API_KEY}`
    });
  }
  private pexelHeader: HttpHeaders;
  AttackOnTitan_Base_Url = 'https://api.attackontitanapi.com';
  FruitsFact_Base_Url = 'https://www.fruityvice.com/api/';
  Pexels_Base_Url="https://api.pexels.com/v1/"
  gimmeJoke(): Observable<any> {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

  getAnimeQuotes(): Observable<any> {
    return this.http.get('https://animechan.xyz/api/random');
  }
  attackOnTitanCharecters() {
    return this.http.get(`${this.AttackOnTitan_Base_Url}/characters`);
  }
  getPexels(){
return  this.http.get(`${this.Pexels_Base_Url}curated?page=2&per_page=40  `,{headers:this.pexelHeader});
  }
  pexelsSearch(query='nature') {
    return this.http.get(`${this.Pexels_Base_Url}search?query=${query}&per_page=40`,{headers:this.pexelHeader})
  }
  getImagePexels(id=2014422) {
    return this.http.get(`${this.Pexels_Base_Url}photos/${id}`,{headers:this.pexelHeader})
  }
  getCuratedPexelImage() {
    return this.http.get(`${this.Pexels_Base_Url}curated?per_page=1`,{headers:this.pexelHeader})

  }
  // documentation https://www.attackontitanapi.com/docs
}
