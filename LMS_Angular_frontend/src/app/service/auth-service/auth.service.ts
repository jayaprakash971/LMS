import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string = '';
  signUpUrl : string = '';
  usernameUrl: string = '';

  constructor(private http : HttpClient) {
    this.loginUrl = "http://localhost:8080/auth/login";
    this.signUpUrl = "http://localhost:8080/auth/register";
    this.usernameUrl = "http://localhost:8080/auth/username";
   }

  login(user : User) : Observable<any> {
    return this.http.post<any>(`${this.loginUrl}`,user);
  }

  signUp(user : User) : Observable<User[]> {
    return this.http.post<User[]>(`${this.signUpUrl}`,user);
  }

  loggedInUsername(id :number): Observable<any> {
    console.log("under observable : " + id);
    return this.http.get(`${this.usernameUrl}/${id}`, {responseType: 'text'});
  }
}
