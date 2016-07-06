import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  templateUrl: `file://${__dirname}/app/components/login.html`
})
export class LoginComponent {
  userName: string;
  password: string;

  loggedIn = false;
  invalid = false;

  logOn(){
    if(this.userName == 'mihai' && this.password == 'mihai') {
      this.loggedIn = true;
    } else {
      this.invalid = true;
    }
  }

  logOut(){
    this.invalid = false;
    this.userName = 'Please Enter Username and Password';
    this.password = '12345';
    this.loggedIn = false;
  }
}