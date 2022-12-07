import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './share/header/header.component';
import { NavComponent } from './share/nav/nav.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ProductsComponent } from './shop-cart/products/products.component';
import { CartComponent } from './shop-cart/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ShareComponent} from "./share/share.component";
import { LoginComponent } from './auth/login/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    NavComponent,
    ShopCartComponent,
    ProductsComponent,
    CartComponent,
    ShareComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
