import { Component } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  _myCart: any[] = [];
  constructor() {
  //get data from local storage
  // @ts-ignore
    let cart = JSON.parse(localStorage.getItem('PRODUCTS')) || [];
    this._myCart = cart;
  }

}
