import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { BasketDialogComponent } from './components/basket/basket-dialog/basket-dialog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryComponent } from './components/category/category.component';
import { AccountComponent } from './components/account/account.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: AuthComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Basket', component: BasketDialogComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Category/:slug', component: CategoryComponent },
  { path: 'product/:slug', component: ProductDetailsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
