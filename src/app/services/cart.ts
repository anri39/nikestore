import { Injectable, signal } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  items = signal<product[]>([]);
  addToCart(product: product) {
    this.items.set([...this.items(), product]);
  }

  removeFromCart(id: product) {
    this.items.set(this.items().filter((p) => p !== id));
  }

  get itemsCount() {
    return this.items().length;
  }
}
