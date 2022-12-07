import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";



export interface product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}


export const products = [
  {
    id: 1,
    name: 'shirt',
    price: 100,
    description: 'blue T-shirt',
    img: 'https://www.cscartdestek.com/demo/images/detailed/1/t-7.jpg'
  },
  {
    id: 2,
    name: 'hat',
    price: 80,
    description: 'black hat',
    img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b11277c0a2424d33b8daacde0077d35c_9366/Trefoil_Bucket_Hat_Black_AJ8995_02_standard_hover.jpg'
  },
  {
    id: 3,
    name: 'shoes',
    price: 250,
    description: 'Converse sneakers in white',
    img: 'https://n.nordstrommedia.com/id/sr3/2132b780-305c-4a85-857d-46a9dcde73dd.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838'
  },
  {
    id: 4,
    name: 'boots',
    price: 400,
    description: 'Timberland boots',
    img: 'https://m.media-amazon.com/images/I/71Du5MOjX0L._AC_SY575_.jpg'

  },
  {
    id: 5,
    name: 'coat',
    price: 300,
    description: 'turquoise jacket',
    img: 'https://cdn.shopify.com/s/files/1/2600/7254/products/c_2301263_surf_1200x1200.jpg?v=1548986955'

  },
  {
    id: 6,
    name: 'sweater',
    price: 120,
    description: 'grey sweater',
    img: 'https://kusteez.com/wp-content/uploads/2020/11/customisable-hoodie-kusteez-grey-600x600.jpg'

  },
  {
    id: 7,
    name: 'jeans',
    price: 150,
    description: 'blue jeans',
    img: 'https://assets.vogue.com/photos/6303e996be0e9b0e8c9fc4d9/3:4/w_1280%2Cc_limit/slide_17.jpg'
  },
  {
    id: 8,
    name: 'cardigan',
    price: 100,
    description: 'brown cardigan',
    img: 'https://static.massimodutti.net/3/photos/2022/I/0/1/p/5663/625/730/5663625730_1_1_3.jpg?t=1653490326144'

  }

];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  public productList: any;

  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((res:any)=>{
      this.productList = res;
    })
  }
  addItemToCart(item:any) {
    this.cartService.addToCart(item);
  }
}

