import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../models/Menu';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-submenu-sidenav',
  templateUrl: './submenu-sidenav.component.html',
  styleUrls: ['./submenu-sidenav.component.scss']
})
export class SubmenuSidenavComponent implements OnInit {
  applicationService : ApplicationService;
  @Input()
  snav;

  @Input()
  tabletQuery: MediaQueryList;

  @Input()
  subMenu: Menu;

  categories = [];


  constructor(private service: ApplicationService) {
    this.applicationService = service;
  }

  ngOnInit() {
    for (const item of this.subMenu.options) {
      this.categories.push(item);
    }
  }

}
