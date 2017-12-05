import { Component, OnInit, Input, ElementRef, NgZone } from '@angular/core';
import { Basket } from '../models/basket.model';
import { ChangeDetectionNotifierBaseComponent } from './cd-notifier.basecomponent';

@Component({
  selector: 'jaifaim-basket',
  template: `
    {{ total }}
  `,
  styles: [':host { display:block; }']
})
export class BasketComponent extends ChangeDetectionNotifierBaseComponent {
  constructor(zone: NgZone, elementRef: ElementRef) {
    super(zone, elementRef);
  }

  total = 0;

  private _basket: Basket;
  @Input() set basket(value: Basket) {
    this._basket = value;
    this.computeBasket();
  }
  get basket(): Basket {
    return this._basket;
  }

  private computeBasket() {
    if (this.basket && this.basket.items) {
      this.total = this.basket.items.map(i => i.item.price * i.quantity).reduce((a, b) => a + b, 0);
    } else {
      this.total = 0;
    }
  }
}
