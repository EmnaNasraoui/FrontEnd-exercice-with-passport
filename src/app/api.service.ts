import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  registerUser(user) {
    return this.http.post('http://localhost:3000/auth/register', user);
  }
  loginUser(user) {
    return this.http.post('http://localhost:3000/auth/login', user);
  }
  setToken(token) {
    this.cookieService.set('token', token, 0);
  }


  getToen() {
    return this.cookieService.get('token');
  }
  isLoggedIn() {
    return this.cookieService.check('token');
  }
  logout() {
    this.cookieService.delete('token');
  }
  allUsers() {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('token'));
    return this.http.get(`http://localhost:3000/api/allUsers`, { headers: header });
  }

}
