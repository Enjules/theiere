import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  login: string;
  mainMenu: Menu;
  mainMenuLoggin: Menu;
  categoriesMenu: Menu;
  categories = [];


  logo = '/assets/img/logo/logo_blanc_soeurs_theieres.png';

  mobileQuery: MediaQueryList;
  tabletQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  private _tabletQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private menuService: MenuService,
    private authService: AuthService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.tabletQuery = media.matchMedia('(max-width: 960px)');
    this._tabletQueryListener = () => changeDetectorRef.detectChanges();
    this.tabletQuery.addListener(this._tabletQueryListener);
   }

  ngOnInit() {
    this.getMenus();
    for (const item of this.categoriesMenu.options) {
      this.categories.push(item);
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getMenus() {
    this.menuService.getMenus().subscribe(
      menus => {
        // console.log('** menus **', menus);
        this.getMainMenu(menus);
        this.getMainMenuLoggin(menus);
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
        // console.log('** mainMenu **', this.mainMenu);
      }
    );
  }

  getMainMenuLoggin(menus) {
    this.getLogin();

    const slug = this.login === 'anonymous' ? 'anonymous-left' : 'main-left';

    this.menuService.getMainMenuLoggin(slug, menus).subscribe(
      menu => {
        this.mainMenuLoggin = menu;
        // console.log('** mainMenuLoggin **', this.mainMenuLoggin);

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
