import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  clicked = signal(false);
  count = signal(10);

  toggleHeart() {
    this.clicked.set(!this.clicked());
    this.count.set(this.clicked() ? this.count() + 1 : this.count() - 1);
  }
}
