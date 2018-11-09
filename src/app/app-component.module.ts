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
import { CategoryComponent } from './components/category/category.component';
import { ContactComponent } from './components/contact/contact.component';
import { BasketDialogComponent } from './components/basket/basket-dialog/basket-dialog.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { OrderComponent } from './components/account/order/order.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { MainToolbarComponent } from './components/menu/main-menu/main-toolbar/main-toolbar.component';
import { MainSidenavComponent } from './components/menu/main-menu/main-sidenav/main-sidenav.component';
import { SubmenuSidenavComponent } from './components/menu/sub-menu/submenu-sidenav/submenu-sidenav.component';
import { SubmenuToolbarComponent } from './components/menu/sub-menu/submenu-toolbar/submenu-toolbar.component';
import { ConfirmEqualValidatorDirective } from './shared/validators/confirm-equal-directive';


@NgModule({
  declarations: [
  AuthComponent,
  LoginComponent,
  AccountComponent,
  ProfileComponent,
  OrderComponent,
  RegisterComponent,
  MenuComponent,
  HomeComponent,
  CategoryComponent,
  ContactComponent,
  BasketDialogComponent,
  ProductDetailsComponent,
  MainToolbarComponent,
  MainSidenavComponent,
  SubmenuSidenavComponent,
  SubmenuToolbarComponent,
  ConfirmEqualValidatorDirective
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
    ConfirmEqualValidatorDirective
  ],
  providers: [
  ],
})
export class AppComponentModule { }
