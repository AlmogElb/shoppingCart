import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {

  @Output() changePage = new EventEmitter<string>();

  goToShop() {
    this.changePage.emit('check3');
  }

  goToCart($event:any) {
    this.changePage.emit($event);
  }
}
