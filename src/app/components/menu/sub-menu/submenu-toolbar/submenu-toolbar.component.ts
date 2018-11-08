import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../models/Menu';

@Component({
  selector: 'app-submenu-toolbar',
  templateUrl: './submenu-toolbar.component.html',
  styleUrls: ['./submenu-toolbar.component.scss']
})
export class SubmenuToolbarComponent implements OnInit {
  @Input()
  snav;

  @Input()
  tabletQuery: MediaQueryList;

  @Input()
  categoriesMenu: Menu;

  categories = [];

  constructor() { }

  ngOnInit() {
    for (const item of this.categoriesMenu.options) {
      this.categories.push(item);
    }
  }

}
