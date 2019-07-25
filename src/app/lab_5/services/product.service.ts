import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];

  constructor() {
      this.products = [
          { id: 'p01', name: 'iphone-x-64gb', price: 100, photo: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-21-600x600.jpg' },
          { id: 'p02', name: 'huawei-nova-3', price: 200, photo: 'https://cdn.tgdd.vn/Products/Images/42/142162/huawei-nova-3-purple-400x460.png' },
          { id: 'p03', name: 'huawei-y9-2019-blue', price: 300, photo: 'https://cdn.tgdd.vn/Products/Images/42/192313/huawei-y9-2019-blue-600x600.jpg' },
          { id: 'p04', name: 'nokia pureview 9', price: 300, photo: 'https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg' }
      ];
  }

  findAll(): Product[] {
      return this.products;
  }

  find(id: string): Product {
      return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
      for (var i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
              return i;
          }
      }
      return -1;
  }
}
