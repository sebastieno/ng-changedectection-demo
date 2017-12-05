import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu.model';
import { MenuService } from './menu.service';
import { MenuItem } from './models/menu-item.model';
import { Basket } from './models/basket.model';

@Component({
  selector: 'jaifaim-root',
  template: `
    <div style="text-align:center">
      <h1>
        Bienvenue sur {{ title }} !
      </h1>
    </div>
    <jaifaim-menu [menu]='menu' (quantityChanged)='quantityChanged($event)'></jaifaim-menu>
    <jaifaim-basket [basket]='basket'></jaifaim-basket>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'JaiFaim';
  menu: Menu;
  basket: Basket = {
    items: []
  };

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(m => this.menu = m);
  }

  quantityChanged(basketItem: { item: MenuItem, quantity: number }) {
    const itemIndex = this.basket.items.findIndex(b => b.item.id === basketItem.item.id);
    if (basketItem.quantity === 0) {
      if (itemIndex) {
        this.basket.items.splice(itemIndex, 1);
      }
    } else if (itemIndex) {
      this.basket.items[itemIndex].quantity = basketItem.quantity;
    } else {
      this.basket.items.push(basketItem);
    }
  }
}
