import {Product} from './Product';

export class Category {
    id?: number;
    slug: string;
    title: string;
    description: string;
    subCategory: this[];
    products: Product[];

    constructor(
        id = null,
        slug = null,
        subCategory = [],
        products = []
    ) {
        this.id = id;
        this.slug = slug;
        this.subCategory = subCategory;
        this.products = products;
    }

}
