import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from './models/menu.model';
import { MenuService } from './menu.service';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'jaifaim-root',
  template: `
    <div style="text-align:center">
      <h1>
        Bienvenue sur {{ title }} !
      </h1>
    </div>
    <jaifaim-basket [basket]='basket'></jaifaim-basket>
    <jaifaim-menu [menu]='menu' (quantityChanged)='quantityChanged($event)'></jaifaim-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'JaiFaim';
  menu: Menu;
  basket: { quantity: number, item: MenuItem }[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(m => this.menu = m);
  }

  quantityChanged(basketItem: { item: MenuItem, quantity: number }) {
    const itemIndex = this.basket.findIndex(b => b.item.id === basketItem.item.id);
    if (basketItem.quantity === 0) {
      if (itemIndex) {
        this.basket.splice(itemIndex, 1);
      }
    } else if (itemIndex !== -1) {
      this.basket[itemIndex].quantity = basketItem.quantity;
      this.basket = [...this.basket];
    } else {
      this.basket.push(basketItem);
    }
  }
}
