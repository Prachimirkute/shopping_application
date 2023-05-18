import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-Up',
  templateUrl: './sign_up.html',
  styleUrls: ['./sign_up.css']
})
export class signUpComponent {
  signupUser: any[] = [];
  signupobj: any = {
    Username: '',
    email: '',
    password: ''
  };
  router: any;
  onSignUp(){
    this.signupUser.push(this.signupobj);
    localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
    this.signupobj = {
      Username: '',
      email: '',
      password: ''
    };
    if(this.signupUser != undefined){
      alert('User Signup Successfully');
    }
  }
}
