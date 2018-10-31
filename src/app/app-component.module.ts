import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// CUSTOM MODULE
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

// COMPONENTS
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuMainComponent } from './components/menu/menu-main/menu-main.component';
import { MenuCategoriesComponent } from './components/menu/menu-categories/menu-categories.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactComponent } from './components/contact/contact.component';
import { BasketDialogComponent } from './components/basket/basket-dialog/basket-dialog.component';


@NgModule({
  declarations: [
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  MenuComponent,
  MenuMainComponent,
  MenuCategoriesComponent,
  HomeComponent,
  CategoryComponent,
  ContactComponent,
  BasketDialogComponent
],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MenuComponent,
    MenuMainComponent,
    MenuCategoriesComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    ContactComponent,
    BasketDialogComponent
  ],
  providers: [
  ],
})
export class AppComponentModule { }
