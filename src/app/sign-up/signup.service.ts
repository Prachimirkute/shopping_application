import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  signupUserFromRemote (user : User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/singupAlien', user)
    }
  }
  //  loginUserFromRemote (user : User):Observable<any>{
  //   return new Observable<any>(observer => {
  //   this.http.post<any>('http://localhost:8080/login', (user:string) => {
  //     alert("loginUserFromRemote");
  //   });
  //   });
  // }

