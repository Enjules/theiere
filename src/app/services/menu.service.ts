import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Menu } from '../models/Menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: Menu[];
  menus$ = new BehaviorSubject<Menu[]>(this.menus);

  menu: Menu = new Menu();
  menu$ = new BehaviorSubject<Menu>(this.menu);

  mainMenu: Menu;
  mainMenu$ = new BehaviorSubject<Menu>(this.mainMenu);

  categoriesMenu: Menu;
  categoriesMenu$ = new BehaviorSubject<Menu>(this.categoriesMenu);

  constructor() {
  }

  setMenus(menus) {
    this.menus = menus;
    localStorage.setItem('menus', JSON.stringify(this.menus));
  }

  getMenus(): Observable<Menu[]> {
    this.menus = JSON.parse(localStorage.getItem('menus'));
    console.log('** menus in service **', this.menus);
    this.menus$.next(this.menus);
    return this.menus$.asObservable();

  }

  getMenu(slug: string): Observable<Menu> {
    this.menu = this.menus.find(
      menu => {
        return menu.slug === slug;
      });

    this.menu$.next(this.menu);
    return this.menu$.asObservable();
  }

  getMainMenu(slug: string, menus: Menu[]): Observable<Menu> {
    this.mainMenu = menus.find(
      menu => {
        return slug === menu.slug;
      }
    );

    this.mainMenu$.next(this.mainMenu);
    return this.mainMenu$.asObservable();
  }

  getCategoriesMenu(slug: string, menus: Menu[]): Observable<Menu> {
    this.categoriesMenu = menus.find(
      menu => {
        return menu.slug === slug;
      }
    );
    this.categoriesMenu$.next(this.categoriesMenu);
    return this.categoriesMenu$.asObservable();
  }


}