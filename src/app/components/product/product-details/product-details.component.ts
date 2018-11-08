import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  slug: string;
  route: any;
  quantity: number;
  totalPricing: number;

  constructor(
    private productService: ProductService,
    route: ActivatedRoute
  ) {
    this.route = route;
    this.product = new Product;
    this.quantity = 1;
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.slug = params['slug'];
        this.getProductBySlug(this.slug);
      }
    );
  }

  getProductBySlug(slug) {
    this.productService.getProductBySlug(slug).subscribe(
      product => {
        this.product = product;
        this.totalPricing = this.product.pricing.ttc;
        // console.log(this.product);
      }
    );
  }

  addToBasket(product) {
    product.order.quantity = this.quantity;
    product.order.total = this.totalPricing;
    this.productService.addToBasket(product).subscribe(
      basket => {
        // console.log('** basket **', basket);
      },
      err => {
        console.error(err);
      }
    );
  }

  addQuantityOrder() {
    if(this.quantity < this.product.pricing.maxPerOrder){
      this.quantity ++;
      this.totalPricing = this.product.pricing.ttc * this.quantity;
    }
  }

  removeQuantityOrder() {
    if(this.quantity > 1){
      this.quantity --;
      this.totalPricing = this.product.pricing.ttc * this.quantity;
    }
  }
}
