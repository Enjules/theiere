import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products;
  slug: string;
  route: any;

  constructor(
    private productService: ProductService,
    route: ActivatedRoute
  ) {
    this.route = route;
  }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.slug = params['slug'];
        this.getProductsByCategory(this.slug);
      }
    );

  }

  getProductsByCategory(slug) {
    this.productService.getProductsByCategory(slug).subscribe(
      products => {
        this.products = products;
      }
    );
  }

  addToBasket(product) {
    this.productService.addToBasket(product).subscribe (
      basket => {
        // console.log('** basket **', basket);
      }
    );
  }
}
