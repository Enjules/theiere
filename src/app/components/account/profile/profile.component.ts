import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/User';

import { AuthService } from '../../../services/auth.service';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  inEditMode: boolean;

  constructor(
    private auth: AuthService,
    private menuService: MenuService,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logOut() {
    this.auth.logout().subscribe(data => {
      this.menuService.getMenus().subscribe(
        menus => {
          if (menus) {
            this.router.navigate(['/signin']);
          }
        }
      );
    });
  }

  editProfile() {
    if (!this.inEditMode) {
      this.inEditMode = true;
    } else {
      this.inEditMode = false;
    }
  }

  test() {
    console.log('User: ', this.user);
  }

}
