import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../services/product';
import { Card } from '../../../components/card/card';

@Component({
  selector: 'app-productlist',
  imports: [Card],
  templateUrl: './productlist.html',
  styleUrl: './productlist.scss',
})
export class Productlist implements OnInit {
  clothing = inject(Product);
  ngOnInit() {
    this.clothing.fetchClothing();
  }
}
