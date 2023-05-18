import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
// import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // @Output() signupUserData : EventEmitter<any>= new EventEmitter;
  loginObj: any = {
    Username: '',
    password: ''
  }
  signupUser: any;
  ngOnInit():void{
    const localData = localStorage.getItem('signupUser');
    console.log(localData);
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }
  }
  onLoginUp(){
const isuserExist = this.signupUser;
for(let i=0;i<=isuserExist.length;i++){
  if(isuserExist[i].Username == this.loginObj.Username && isuserExist[i].password == this.loginObj.Password){
    alert('User Login Successfully');
    break;
  }else{
    alert('Wrong Credentials');
    break;
  } 
}
 
}

}
