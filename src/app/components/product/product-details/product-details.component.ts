import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product, Pricing } from '../../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  quantitySelected: Pricing;
  slug: string;
  route: any;
  quantity: number;
  addedInBasket: boolean;

  constructor(
    private productService: ProductService,
    route: ActivatedRoute
  ) {
    this.route = route;
    this.product = new Product;
    this.quantity = 1;
    this.addedInBasket = false;
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        setTimeout(() => {
          this.slug = params['slug'];
          this.getProductBySlug(this.slug);
        });
      }
    );
  }

  getProductBySlug(slug) {
    this.productService.getProductBySlug(slug).subscribe(
      product => {
        this.product = product;
        this.quantitySelected = product.getMinimalPricing();
        console.log("produit " , this.product);
      }
    );
  }

  addToBasket(product) {
    product.order.quantity = this.quantity;
    product.order.total = this.quantitySelected.ttc * this.quantity;
    this.productService.addToBasket(product).subscribe(
      basket => {
        // console.log('** basket **', basket);
        this.addedInBasket = true;

        setTimeout(() => {
          this.addedInBasket = false;
        }, 1000);

      },
      err => {
        console.error(err);
      }
    );
  }

  addQuantityOrder() {
    if (this.quantity < this.product.pricing[0].maxPerOrder) {
      this.quantity++;
    }
  }

  removeQuantityOrder() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
