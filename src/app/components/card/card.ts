import { Component, inject, input, signal } from '@angular/core';
import { Cart } from '../../services/cart';
import { product, Product } from '../../services/product';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: true,
})
export class Card {
  clicked = signal(false);
  item = input<product>();
  searchTerm = signal('');

  count = signal(Math.floor(Math.random() * 350)); // random like count
  inStock = signal(Math.random() < 0.5); // random check if its in stock

  toggleHeart() {
    this.clicked.set(!this.clicked());
    this.count.set(this.clicked() ? this.count() + 1 : this.count() - 1);
  }

  addToCart() {
    if (!this.inStock()) {
      console.log('Could not add item, Because it was not in stock, ' + this.item());
      alert('Could not add!');
      return;
    }
    this.carts.addToCart(this.item()!);
  }

  carts = inject(Cart);
}
