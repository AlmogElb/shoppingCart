import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartService} from "../../service/cart.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any[] = [];

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res:any)=>{
      this.products = res;
    })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  @Output() changePage = new EventEmitter<string>();

  goTo($event: string) {
    this.changePage.emit($event);
  }
}
