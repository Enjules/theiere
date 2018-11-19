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

  basket: Product[];
  basket$ = new BehaviorSubject<Product[]>(this.basket);

  inBasket = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private httpClient: HttpClient
  ) {
    this.product = new Product();
  }


  getProductsByCategory(slug): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/category/${slug}`)
      .pipe(
        map(res => {
          this.products = [];
          res['categoryProducts'].map(
            product => {
              const data = [];
              data.push(product.content, product.decorators);

              this.products.push(new Product().deserialize(data, product.slug));
            }
          );
          return this.products;
        }),
      );
  }

  getProductBySlug(slug): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/product/${slug}`)
      .pipe(
        map(res => {
          const data = [];
          data.push(res['product'], res['decorators']);
          // console.log('data in service: ', data);
          this.product.deserialize(data);
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

  addToBasket(product, quantity?): Observable<any[]> {
    if (isPlatformBrowser(this.platformId)) {
      this.basket = [];
      if (JSON.parse(localStorage.getItem('basket'))) {
        this.basket = JSON.parse(localStorage.getItem('basket'));
        this.getInBasket(product, this.basket);
         console.log('il existe ? ', this.inBasket);
      }
    }

    if (isPlatformBrowser(this.platformId)) {
      if (this.inBasket) {
        this.updateProductBasket(product, this.basket);
      } else {
        this.basket.push(product);
        localStorage.setItem('basket', JSON.stringify(this.basket));
      }
    }

    this.basket$.next(this.basket);
    return this.basket$.asObservable();
  }

  getInBasket(product: Product, basket: Product[]) {
    for (const p of basket) {
      if (p.reference === product.reference) {
        this.inBasket = true;
        return true;
      } else {
        this.inBasket = false;
        return false;
      }
    }
  }

  updateProductBasket(product: Product, basket: Product[]) {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].reference === product.reference) {
        if (basket[i].order.quantity + product.order.quantity > product.pricing[0].maxPerOrder) {
          basket[i].order.quantity = product.pricing[0].maxPerOrder;
        } else {
          basket[i].order.quantity += product.order.quantity;
        }
      }
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    // console.log('basket in service :', basket);
  }
}
