import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://api.lessoeurstheiere.com';
  products: Product[];
  product: Product;

  basket;
  basket$ = new BehaviorSubject<Product[]>(this.basket);

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private httpClient: HttpClient
  ) {
    this.product = new Product();
  }


  getProductsByCategory(slug): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/category/${slug}`)
      .pipe(
        map(res => {
          this.products = res['categoryProducts'].map((product) => new Product().deserialize(product.content, product.slug));
          return this.products;
        }),
      );
  }

  getProductBySlug(slug): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/product/${slug}`)
      .pipe(
        map(res => {
          this.product.deserialize(res['product']);
          return this.product;
        })
      );
  }

  getBasket(): Observable<Product[]> {
    if (isPlatformBrowser(this.platformId)) {
      if (JSON.parse(localStorage.getItem('basket'))) {
        const data = JSON.parse(localStorage.getItem('basket'));
        this.basket = data;
      } else {
        this.basket = [];
      }
    }

    this.basket$.next(this.basket);
    return this.basket$.asObservable();
  }

  addToBasket(product): Observable<any[]> {
    if (isPlatformBrowser(this.platformId)) {
      if (JSON.parse(localStorage.getItem('basket'))) {
        this.basket = JSON.parse(localStorage.getItem('basket'));
      } else {
        this.basket = [];
      }
    }

    this.basket.push(product);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('basket', JSON.stringify(this.basket));
    }

    this.basket$.next(this.basket);
    return this.basket$.asObservable();
  }
}
