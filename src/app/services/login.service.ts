import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri:string = 'http://challenge-react.alkemy.org/';

  constructor(
    private http:HttpClient,
    private router:Router,
    private jwt:JwtHelperService
    ) { }

  login(obj:any) {
    return this.http.post(this.uri,obj)
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuth():boolean {
    let token = localStorage.getItem('token');
    if (!token || token == '') {
      return false;
    }
    if (this.jwt.isTokenExpired(token)) {
      return false
    }
    return true;
  }

}
