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

  constructor(
    private productService: ProductService,
    route: ActivatedRoute
  ) {
    this.route = route;
    this.product = new Product;
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
      }
    );
  }

  addToBasket(product) {
    this.productService.addToBasket(product).subscribe(
      basket => {
        console.log('** basket **', basket);
      }
    );
  }

}
