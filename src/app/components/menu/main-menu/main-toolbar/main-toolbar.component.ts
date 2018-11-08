import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../models/Menu';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
  @Input()
  snav;

  @Input()
  tabletQuery: MediaQueryList;

  @Input()
  mainMenu: Menu;

  @Input()
  mainMenuLoggin: Menu;

  @Input()
  logo: string;


  basket;
  disableBtn: boolean;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.productService.getBasket().subscribe(
      basket => {
        this.basket = basket;
        this.disableBtn = this.basket.length ? false : true;
      }
    );
  }

}
