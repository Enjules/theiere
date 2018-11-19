import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../models/Menu';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-submenu-toolbar',
  templateUrl: './submenu-toolbar.component.html',
  styleUrls: ['./submenu-toolbar.component.scss']
})
export class SubmenuToolbarComponent implements OnInit {
  applicationService: ApplicationService;
  @Input()
  snav;

  @Input()
  tabletQuery: MediaQueryList;

  @Input()
  categoriesMenu: Menu;

  categories = [];

  constructor(private service: ApplicationService) {
    this.applicationService = service;
   }

  ngOnInit() {
    for (const item of this.categoriesMenu.options) {
      if(this.applicationService.onDevelopment) {
        for(const node of item.nodes) {
          node.route = '';
        }
      }
      this.categories.push(item);
    }
    console.log(this.categories);
  }

}
