import {Component, EventEmitter, Output} from '@angular/core';
import {Users} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  _emailAddress: string = '';
  hidePassword: boolean = true;
  _password: string = '';

  login() {
    // @ts-ignore
    let users = JSON.parse(localStorage.getItem('USERS')) || [];
    let user = users.find((user:Users) => user.email === this._emailAddress && user.password === this._password);
    let userNotValidPassword = users.find((user:Users) => user.email === this._emailAddress && user.password !== this._password);
    if(user){
      this.changePage.emit('GoToShop');
      localStorage.setItem('USERLOGIN',this._emailAddress)
    }
    else if(userNotValidPassword){
      alert("Password is incorrect");
      this._password = '';
    }
    else{
      alert("User not found");
    }
  }
  @Output() changePage = new EventEmitter<string>();

  Create_account() {
    this.changePage.emit('goToRegister');
  }
}
