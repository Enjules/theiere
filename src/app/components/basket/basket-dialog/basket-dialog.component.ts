import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.scss']
})
export class BasketDialogComponent implements OnInit {
basket;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.productService.getBasket().subscribe (
      basket => {
        this.basket = basket;
        console.log('** Menu basket **', this.basket);
      }
    );
  }

}
