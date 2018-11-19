import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.scss']
})
export class BasketDialogComponent implements OnInit {
  basket: Product[];
  displayedColumns: string[] = ['libelle', 'quantity', 'cost'];
  selectedValue: number;
  maxPeerOrder = Array.from({ length: 50 }).map((_, i) => `${i + 1}`);
  isLinear = true;

  firstFormGroup: FormGroup;
  billingAdressFormGroup: FormGroup;
  delivryAdressFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.basket = [new Product];
    this.selectedValue = +this.maxPeerOrder[5];
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      quantity: [false, Validators.required]
    });

    this.delivryAdressFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.billingAdressFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

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
    if (product.pricing[0].stock < product.pricing[0].maxPerOrder) {
      this.maxPeerOrder = Array.from({ length: product.pricing[0].stock }).map((_, i) => `${i + 1}`);
    } else {
      this.maxPeerOrder = Array.from({ length: product.pricing[0].maxPerOrder }).map((_, i) => `${i + 1}`);
    }

    return this.maxPeerOrder;
  }

  getTotalCost() {
    if (this.basket.length) {
      return this.basket.map(product => {
        return product.pricing[0].ttc * product.order.quantity;
      }).reduce((acc, value) => {
        return acc + value;
      });
    } else {
      return 0;
    }
  }

}
