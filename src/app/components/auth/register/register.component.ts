import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  civilities = ['Mme', 'Mr'];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }


  get f() {
    return this.registerForm.controls;
  }

  createForm(): any {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      civility: ['', [Validators.required]],
      company: ['']
    });
  }

  register() {
    this.submitted = true;
    this.auth.register(this.registerForm.value).subscribe(res => {
      this.menuService.getMenus().subscribe(
        menus => {
          if (menus) {
            this.router.navigate(['/']);
          }
        }
      );
    });
  }

}
