import { Component } from '@angular/core';
export interface Users {
  email: string;
  password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart';
  _showRegister: boolean = false;
  _showLogin: boolean = true;
  _showShop: boolean = false;
  _showCart: boolean = false;
  constructor() {
    localStorage.getItem('USERLOGIN') ? this.goToShop('GoToShop') : this.goToLogin('goToLogin');
  }
  test(){
    alert("test");
  }

  goToRegister($event: any) {
    this._showRegister = true;
    this._showLogin = false;
    this._showShop = false;
    this._showCart = false;
  }

  goToLogin($event: any) {
    this._showRegister = false;
    this._showLogin = true;
    this._showShop = false;
    this._showCart = false;
  }

  goToShop($event: any) {
    this._showRegister = false;
    this._showLogin = false;
    this._showShop = true;
    this._showCart = false;
  }
  goToCart($event: any) {
    this._showRegister = false;
    this._showLogin = false;
    this._showShop = false;
    this._showCart = true;
  }

  goTo($event: string) {
    if ($event === 'goToRegister') {
      this.goToRegister($event);
    } else if ($event === 'GoToShop') {
      this.goToShop($event);
    }
    else if($event === 'goToCart') {
      this.goToCart($event);
    }
  }
}
