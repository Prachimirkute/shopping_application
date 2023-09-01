import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myImage:string = "assets/images/shopping.jpg";
  title = 'shopping_app';
  // loadFeature = 'sign-up';
  // onNavigate(feature: string) {
  //   this.loadFeature = feature;
  // }
  link = [
    {path:'/home', label:'home', active:'button-active' },
    {path:'/chatbot', label:'chatbot', active:'button-active' }
  ]
  }
  