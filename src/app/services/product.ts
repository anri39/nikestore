import { Injectable, signal } from '@angular/core';

type product = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  tag?: string;
  category?: string;
  description?: string;
};

@Injectable({
  providedIn: 'root',
})
export class Product {
  // https://api.escuelajs.co/api/v1/products
  clothing = signal<product[]>([]);
}
