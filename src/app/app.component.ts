import { Component, OnInit } from '@angular/core';
import { Item } from './lab_5/models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myAppAngular';
  countItem = 0
  ngOnInit() {
    setInterval(() => {
      this.countItem = this.setCountItem()
    }, 100)
  }
  setCountItem() {
    let count = 0;
    let cart;
    if(localStorage.cart){
       cart = JSON.parse(localStorage.cart)
    }
    if(cart){
      for (let i = 0; i < cart.length; i++) {
        let item :Item = JSON.parse(cart[i])
        count += item.quantity
      }
    }
    return count;
  }
}
