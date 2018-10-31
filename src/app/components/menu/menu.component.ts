import { Component, OnInit } from '@angular/core';
import { Menu } from '../..//models/Menu';
import { MenuService } from '../../services/menu.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  login: string;

  menus: Menu[];
  mainMenu: Menu;
  categoriesMenu: Menu;

  constructor(
    private menuService: MenuService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe(
      menus => {
        console.log('** menus **', menus);
        this.getMainMenu(menus);
        this.getCategoriesMenu(menus);
      }
    );
  }


  getMainMenu(menus) {
    this.getLogin();
    const slug = 'main';

    this.menuService.getMainMenu(slug, menus).subscribe(
      menu => {
        this.mainMenu = menu;
      }
    );
  }

  getCategoriesMenu(menus) {
    const slug = 'categories';

    this.menuService.getCategoriesMenu(slug, menus).subscribe(
      menu => {
        this.categoriesMenu = menu;
      }
    );
  }

  getLogin() {
    this.authService.getLogin().subscribe(
      login => {
        this.login = login;
      }
    );
  }

}
