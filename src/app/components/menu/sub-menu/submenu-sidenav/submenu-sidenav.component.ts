import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../models/Menu';

@Component({
  selector: 'app-submenu-sidenav',
  templateUrl: './submenu-sidenav.component.html',
  styleUrls: ['./submenu-sidenav.component.scss']
})
export class SubmenuSidenavComponent implements OnInit {
  @Input()
  snav;

  @Input()
  tabletQuery: MediaQueryList;

  @Input()
  subMenu: Menu;

  categories = [];


  constructor() {
  }

  ngOnInit() {
    for (const item of this.subMenu.options) {
      this.categories.push(item);
    }
  }

}
