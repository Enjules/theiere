import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-product',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: Category;
  slug: string;
  route: any;
  quantitySelected = "50gr";

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    route: ActivatedRoute
  ) {
    this.category = new Category();
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
    this.categoryService.getCategoryBySlug(slug).subscribe(
      products => {
        this.category = products;
        console.log('** this.products **', products);
      },
      err => {
        console.log('ERREUR');
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

  test(){
    console.log(this.quantitySelected);
  }
}
