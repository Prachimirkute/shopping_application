import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   loginObj: any = {
    Username: '',
    password: ''
  }
  signupUser: any;
    constructor(private router : Router){}
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
  if(isuserExist[i].Username == this.loginObj.Username && isuserExist[i].password == this.loginObj.password){
    alert('User Login Successfully');
    // this.router.navigate(['/recipes']);
    break;
  }else{
    alert('Wrong Credentials');
    break;
  } 
}
  }
}
