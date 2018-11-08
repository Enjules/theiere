import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../models/Menu';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {
  @Input()
  snav;

  @Input()
  tabletQuery: MediaQueryList;

  @Input()
  mainMenu: Menu;

  @Input()
  mainMenuLoggin: Menu;


  constructor() { }

  ngOnInit() {
  }

}
