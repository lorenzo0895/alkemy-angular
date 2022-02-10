import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri:string = 'http://challenge-react.alkemy.org/';

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  login(obj:any) {
    return this.http.post(this.uri,obj)
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
