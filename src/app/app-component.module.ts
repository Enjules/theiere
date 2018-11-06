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
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { OrderComponent } from './components/account/order/order.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { MenuTestComponent } from './test/menu-test/menu-test.component';


@NgModule({
  declarations: [
  AuthComponent,
  LoginComponent,
  AccountComponent,
  ProfileComponent,
  OrderComponent,
  RegisterComponent,
  MenuComponent,
  MenuMainComponent,
  MenuCategoriesComponent,
  HomeComponent,
  CategoryComponent,
  ContactComponent,
  BasketDialogComponent,
  ProductDetailsComponent,
  MenuTestComponent
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
    AccountComponent,
    ProfileComponent,
    OrderComponent,
    CategoryComponent,
    ContactComponent,
    BasketDialogComponent,
    ProductDetailsComponent,
    MenuTestComponent
  ],
  providers: [
  ],
})
export class AppComponentModule { }
