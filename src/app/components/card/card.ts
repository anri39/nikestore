import { Component, inject, input, signal } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: true,
})
export class Card {
  clicked = signal(false);
  title = input.required<string>();
  price = input.required<number>();
  img = input.required<string>();

  count = signal(Math.floor(Math.random() * 350)); // random like count
  inStock = signal(Math.random() < 0.5); // random check if its in stock

  toggleHeart() {
    this.clicked.set(!this.clicked());
    this.count.set(this.clicked() ? this.count() + 1 : this.count() - 1);
  }

  carts = inject(Cart);
}
