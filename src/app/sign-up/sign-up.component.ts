import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    // @Output() signupUserData : EventEmitter<any>= new EventEmitter;
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
  
