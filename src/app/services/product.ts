import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

export type product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  tag?: string;
  category?: string;
  description?: string;
};

@Injectable({
  providedIn: 'root',
})
export class Product {
  clothing = signal<product[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  private fetched = false;
  fetchClothing() {
    if (this.fetched) return;
    this.fetched = true;
    this.loading.set(true);
    this.error.set(null);
    this.http
      .get<product[]>('https://api.escuelajs.co/api/v1/products?offset=0&limit=50')
      .subscribe({
        next: (res) => this.clothing.set(res),
        error: (err) => this.error.set(err.message || 'Failed to load products'),
        complete: () => this.loading.set(false),
      });
  }
}
