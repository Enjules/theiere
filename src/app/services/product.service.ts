import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://api.lessoeurstheiere.com';
  products;

  basket = [];
  basket$ = new BehaviorSubject<any[]>(this.basket);

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private httpClient: HttpClient
  ) { }


  getProductsByCategory(slug) {
    return this.httpClient.get(`${this.apiUrl}/category/${slug}`)
      .pipe(
        map(res => {
          this.products = res['categoryProducts'];

          return this.products;
        })
      );
  }

  getBasket(): Observable<any[]> {
    if (isPlatformBrowser(this.platformId)) {
      if (JSON.parse(localStorage.getItem('basket'))) {
        this.basket = JSON.parse(localStorage.getItem('basket'));
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
