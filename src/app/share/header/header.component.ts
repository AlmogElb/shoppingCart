import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  _userLogin:string = '';
  constructor() {
    this._userLogin = localStorage.getItem('USERLOGIN') || '';
    //remove @gmail.com from userLogin
    this._userLogin = this._userLogin.replace('@gmail.com','');
  }

  doLogOut() {
    localStorage.removeItem('USERLOGIN');
    window.location.reload();
  }

  //create a emit function to emit the event to parent component
  @Output() changePage = new EventEmitter<string>();

  goToCart() {
    this.changePage.emit('goToCart');
  }

  goToShop() {
    this.changePage.emit('GoToShop');
  }
}
