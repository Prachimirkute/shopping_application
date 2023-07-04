import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUserFromRemote (user : User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/login', user)
    }
  // getUserDetails( Username , password) {
  //   let response = this.http.get('http://localhost:8080/aliens/'+Username+'/'+password);
  //   response.subscribe((data)=>this.signupobj = data);
  // }
}
