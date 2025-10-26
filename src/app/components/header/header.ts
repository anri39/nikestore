import { Component, inject, signal } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  siteName = signal('Clothing Store');
  carts = inject(Cart);
}
