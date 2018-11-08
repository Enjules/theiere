import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/User';
import { MenuService } from '../services/menu.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://api.lessoeurstheiere.com';
  user: User = new User();

  login: string;
  login$ = new BehaviorSubject<string>(this.login);

  constructor(
    private httpClient: HttpClient,
    private menuService: MenuService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  load() {
    return new Promise((resolve, reject) => {
      if (!this.user) {
        this.httpClient.get(`${this.apiUrl}/nouser`)
          .subscribe(res => {
            if (res) {
              this.menuService.setMenus(res['menus']);
              localStorage.setItem('login', JSON.stringify(res['login']));
            }
            resolve(true);
          });
      } else {
        resolve(false);
      }
    });
  }

  getLogin(): Observable<string> {
    this.login = JSON.parse(localStorage.getItem('login'));

    this.login$.next(this.login);
    return this.login$.asObservable();
  }

  loginUser(credentials) {
    return this.httpClient.post(`${this.apiUrl}/signin`, credentials)
      .pipe(
        map(res => {
          if (res) {
            this.user = res['userDetails'];
            this.user.name = res['name'];
            this.user.email = res['login'];
            this.user.id = res['id'];

            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('login', JSON.stringify(res['login']));

            this.menuService.setMenus(res['menus']);
          }
          return this.user;
        })
      );
  }

  logout() {

    localStorage.removeItem('user');
    localStorage.removeItem('menus');

    return this.httpClient.get(`${this.apiUrl}/nouser`)
      .pipe(
        map(res => {
          if (res) {
            localStorage.setItem('login', JSON.stringify(res['login']));
            localStorage.setItem('menus', JSON.stringify(res['menus']));
          }
          return res;
        })
      );

  }

  register(credentials) {
    return this.httpClient.put(`${this.apiUrl}/register`, credentials)
      .pipe(
        map(res => {
          if (res) {
            this.user = res['userDetails'];
            this.user.name = res['name'];
            this.user.email = res['login'];
            this.user.id = res['id'];

            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('login', JSON.stringify(res['login']));

            this.menuService.setMenus(res['menus']);
          }
          return this.user;
        })
      );
  }
}
