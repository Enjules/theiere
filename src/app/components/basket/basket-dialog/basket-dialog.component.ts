import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.scss']
})
export class BasketDialogComponent implements OnInit {
  basket: Product[];
  displayedColumns: string[] = ['libelle', 'description', 'quantity', 'cost'];
  selectedValue = 1;
  quantity = [1, 2, 3, 4, 5];
  isLinear = false;

  constructor(
    private productService: ProductService
  ) {
    this.basket = [new Product];
   }

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.productService.getBasket().subscribe(
      basket => {
        this.basket = basket;
      }
    );
  }

  getTotalCost() {
    return this.basket.map(t => t.pricing.ttc).reduce((acc, value) => {
      return acc + value;
    });
  }

}
