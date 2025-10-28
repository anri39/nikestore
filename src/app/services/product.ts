import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

export type product = {
  id: number;
  title: string;
  price: number;
  image: string;
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
  searchTerm = signal('');
  filteredClothing = signal<product[]>([]);

  constructor(private http: HttpClient) {}

  private fetched = false;
  fetchClothing() {
    if (this.fetched) return;
    this.fetched = true;
    this.loading.set(true);
    this.error.set(null);
    this.http.get<product[]>('https://fakestoreapi.com/products').subscribe({
      next: (res) => {
        this.clothing.set(res);
        this.filteredClothing.set(res);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to load products');
      },
      complete: () => this.loading.set(false),
    });
  }

  search(term: string) {
    this.searchTerm.set(term);
    const everyProduct = this.clothing();
    const filtered = everyProduct.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    this.filteredClothing.set(filtered);
  }
}
