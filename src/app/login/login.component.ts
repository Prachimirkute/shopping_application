import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../sign-up/signup.service';
import { User } from '../user';
import { LoginService } from './login.service';
// import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user = new User();
  msg = "";
  // Username: string ="";
  // email:string ="";
  // password: string ="";
  constructor(private http: HttpClient,private router: Router, private loginService: LoginService) { }
  ngOnInit():void{}

  onLoginUp( ) {
  this.loginService.loginUserFromRemote(this.user).subscribe(
  data=>{
    console.log("Response receive");
    // this.router.navigate(['/recipes']);
  },
  error => {
    console.log("Exception occure");
    this.msg = "Bad Credentials, Please enter valid emailid and password";
    // this.router.navigate(['/recipes']);
  }
);
  }
  // onLoginUp( ) {
  //   console.log(this.email);
  //   console.log(this.password);
  //   let loginObj = {
  //     "email":this.email,
  //     "password": this.password,
  //   };
  //   this.http.post('http://localhost:8080/aliens', loginObj,{responseType: 'text'}).subscribe((resultData:any)=>{
  //     console.log(resultData);
  //     if(resultData.message = "Email not exist"){
  //       alert("Email not exist");
  //     } else if(resultData.message = "Login Success"){
  //       alert("Login Success");
  //       this.router.navigate(['/recipes']);
  //     }else{
  //       alert("Email Password not match");
  //     }

  //   });
  // }
}
// export class LoginComponent implements OnInit{
//    loginObj: any = {
//     Username: '',
//     password: ''
//   }
//   signupUser: any;
//     constructor(private router : Router){}
//   ngOnInit():void{
//     const localData = localStorage.getItem('signupUser');
//     console.log(localData);
//     if(localData != null){
//       this.signupUser = JSON.parse(localData);
//     }
//   }
//   onLoginUp(){
// const isuserExist = this.signupUser;
// for(let i=0;i<=isuserExist.length;i++){
//   if(isuserExist[i].Username == this.loginObj.Username && isuserExist[i].password == this.loginObj.password){
//     alert('User Login Successfully');
//     // this.router.navigate(['/recipes']);
//     break;
//   }else{
//     alert('Wrong Credentials');
//     break;
//   } 
// }
//   }
