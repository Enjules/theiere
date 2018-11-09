import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private menuService: MenuService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  get f() {
    return this.loginForm.controls;
  }

  createForm(): any {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    this.submitted = true;
    this.auth.loginUser(this.loginForm.value).subscribe(res => {
      this.menuService.getMenus().subscribe(
        menus => {
          if (menus) {
            this.router.navigate(['/']);
            console.log(this.loginForm);
          }
        }
      );
    });
  }

}
