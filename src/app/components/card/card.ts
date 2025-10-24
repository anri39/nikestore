import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  clicked = signal(false);

  toggleHeart() {
    this.clicked.set(!this.clicked());
  }
}
