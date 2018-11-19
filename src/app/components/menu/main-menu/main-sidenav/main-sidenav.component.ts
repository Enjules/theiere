import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../models/Menu';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {
  applicationService: ApplicationService;

  @Input()
  snav;

  @Input()
  tabletQuery: MediaQueryList;

  @Input()
  mainMenu: Menu;

  @Input()
  mainMenuLoggin: Menu;


  constructor(private service: ApplicationService ) {
    this.applicationService = service;
   }

  ngOnInit() {
  }

}
