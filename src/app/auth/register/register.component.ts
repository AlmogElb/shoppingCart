import {Component, EventEmitter, Output} from '@angular/core';
import {Users} from "../../app.component";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  _isEmailNotValid:boolean = false;
  _isPasswordNoCapital:boolean = false;
  _isPasswordMinLength:boolean = false;
  _isPasswordTheSame:boolean = false;
  _isRegisterDisable:boolean = true;
  _emailAddress :string ='';
  _password:string = '';
  _verifiedPassword:string = '';
  hidePassword = true;
  hideConfirmPassword = true;



  validInformation(){
    this.validEmail();
    this.validPassword();
    this.validConfirmPassword();
    this.validRegister();
  }
  validEmail(){
    this._isEmailNotValid = this._emailAddress.length === 0 || !(this.expression.test(this._emailAddress));
  }
  validPassword(){
    this._isPasswordNoCapital = !this._password.match(/[A-Z]/);
    this._isPasswordMinLength = this._password.length < 6;
  }
  validConfirmPassword(){
    this._isPasswordTheSame = this._password !== this._verifiedPassword;
  }
  validRegister(){
    this._isRegisterDisable = this._isEmailNotValid || this._isPasswordNoCapital || this._isPasswordMinLength || this._isPasswordTheSame;
  }

  addUser() {
    // @ts-ignore
    let users = JSON.parse(localStorage.getItem('USERS')) || [];
    let newUser:Users = {email: this._emailAddress, password: this._password};
    //check if newUser is already in users
    let isUserInUsers = users.find((user:Users) => user.email === newUser.email);
    if(isUserInUsers){
      alert("User already exists");
    }
    else{
      users.push(newUser);
      localStorage.setItem('USERS', JSON.stringify(users));
      this.goToLogin(newUser.email);
    }
  }

  @Output() changePage = new EventEmitter<string>();

  goToLogin(userEmail?:string) {
    this.changePage.emit(userEmail);
  }
}
