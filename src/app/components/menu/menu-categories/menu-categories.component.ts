import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, HostListener , Inject} from '@angular/core';

import { Menu } from '../../../models/Menu';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit, AfterViewInit {
  @Input()
  menu: Menu;

  @ViewChild('stickyMenu') menuElement: ElementRef;
  menuPosition: any;

  categories = [];
  sticky = false;


  constructor() {
    this.menu = new Menu();
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit() {
    for (const item of this.menu.options) {
      this.categories.push(item);
    }

    //  console.log('** categories **', this.categories);
  }

  ngAfterViewInit () {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

}
