import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.scss']
})
export class BasketDialogComponent implements OnInit {
  basket: Product[];
  displayedColumns: string[] = ['libelle', 'description', 'quantity', 'cost'];
  selectedValue: number;
  maxPeerOrder = Array.from({ length: 50 }).map((_, i) => `${i + 1}`);
  isLinear = false;

  constructor(
    private productService: ProductService
  ) {
    this.basket = [new Product];
    this.selectedValue = +this.maxPeerOrder[5];
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

  getMaxPeerOrder(product: Product) {
    if (product.pricing.stock < product.pricing.maxPerOrder) {
      this.maxPeerOrder = Array.from({ length: product.pricing.stock }).map((_, i) => `${i + 1}`);
    } else {
      this.maxPeerOrder = Array.from({ length: product.pricing.maxPerOrder }).map((_, i) => `${i + 1}`);
    }

    return this.maxPeerOrder;
  }

  getTotalCost() {
    if (this.basket.length) {
          return this.basket.map(product => {
      return product.pricing.ttc * product.pricing.quantity;
    }).reduce((acc, value) => {
      return acc + value;
    });
    } else {
      return 0;
    }

  }

}
