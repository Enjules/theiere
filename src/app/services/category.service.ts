import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    apiUrl = 'https://api.lessoeurstheiere.com';
    category: Category;
    products: Product[];

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private httpClient: HttpClient) { }


    getCategoryBySlug(slug: string): Observable<Category> {
        return this.httpClient.get<Product[]>(`${this.apiUrl}/category/${slug}`)
            .pipe(
                map(res => {
                    this.category = new Category();
                    this.category.title = res['currentCategory']['content']['title'][0]['fr'];
                    res['categoryProducts'].map(
                        product => {
                            const data = [];
                            data.push(product.content, product.decorators);
                            this.category.products.push(new Product().deserialize(data, product.slug));
                        }
                    );
                    res['childrenProducts'].map(
                        category => {
                            const newCategory = new Category();
                            newCategory.title = category['category']['title'][0]['fr'];
                            newCategory.description = category['category']['description']['fr'];
                            category.products.map(
                                product => {
                                    const data = [];
                                    data.push(product.content, product.decorators);
                                    newCategory.products.push(new Product().deserialize(data));
                                }
                            );
                            this.category.subCategory.push(newCategory);
                        }
                    );
                    // console.log(this.category);
                    return this.category;
                }),
            );
    }
}
