import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  uri:string = 'https://www.superheroapi.com/api.php/10227422955581056/';

  constructor(private http:HttpClient) { }

  findByName(name:string) {
    return this.http.get(this.uri + 'search/' + name);
  }
  
}
