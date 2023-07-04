import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { User } from '../user';
// import { text } from 'stream/consumers';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = new User();
  msg = "";
  // Username: string ="";
  // email:string ="";
  // password: string ="";
  constructor(private http: HttpClient,private router: Router, private signupService: SignupService) { }
  ngOnInit():void{}

  onSignUp( ) {
  this.signupService.signupUserFromRemote(this.user).subscribe(
  data=>{
    console.log("Response receive");
    this.msg = "Sign Up Successfully";
    // this.router.navigate(['/login']);
  },
  error => {
    console.log("Exception occure");
    this.msg = error.error;
    // this.router.navigate(['/recipes']);
  });
  }
    // @Output() signupUserData : EventEmitter<any>= new EventEmitter;
    // signupUser: any[] = [];
    // Username: string ="";
    // email:string ="";
    // password: string ="";
    // constructor(private http: HttpClient) { }
    // onSignUp( ) {
    //   let signupobj = {
    //     "Username": this.Username,
    //     "email":this.email,
    //     "password": this.password,
    //   };
    //   this.http.post('http://localhost:8090/aliens', signupobj,{responseType: 'text'}).subscribe((resultData:any)=>{
    //     console.log(resultData);
    //     alert("Sing Up Successfully");
    //   });
    // }
    // router: any;
    // onSignUp(){
    //   this.signupUser.push(this.signupobj);
    //   localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
    //   this.signupobj = {
    //     Username: '',
    //     email: '',
    //     password: ''
    //   };
    //   if(this.signupUser != undefined){
    //     alert('User Signup Successfully');
    //   }
    // }
  
  }
  
