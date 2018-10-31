import { Component, OnInit, Input } from '@angular/core';

import { Menu } from '../../../models/Menu';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit {
  @Input()
  menu: Menu;

  @Input()
  menuLoggin: Menu;

  basket;

  logo_blanc_soeurs_theieres = '/assets/img/logo/logo_blanc_soeurs_theieres.png';

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    console.log('** menuLoggin **', this.menuLoggin);
    this.getBasket();
  }

  getBasket() {
    this.productService.getBasket().subscribe (
      basket => {
        this.basket = basket;
      }
    );
  }

}
