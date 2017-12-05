import { Component, OnInit, Input, ElementRef, NgZone, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectionNotifierBaseComponent } from './cd-notifier.basecomponent';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'jaifaim-basket',
  template: `
    {{ total | currency }}
    <br/>
    <ul>
      <li *ngFor='let item of basket'>{{ item.item.label }} {{ item.quantity }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [':host { display:block; }']
})
export class BasketComponent extends ChangeDetectionNotifierBaseComponent {
  constructor(zone: NgZone, elementRef: ElementRef) {
    super(zone, elementRef);
  }

  total = 0;
  private _basket: { quantity: number, item: MenuItem }[];
  @Input() set basket(value: { quantity: number, item: MenuItem }[]) {
    this._basket = value;
  }
  get basket(): { quantity: number, item: MenuItem }[] {
    this.computeBasket();
    return this._basket;
  }

  private computeBasket() {
    if (this._basket && this._basket) {
      this.total = this._basket.map(i => i.item.price * i.quantity).reduce((a, b) => a + b, 0);
    } else {
      this.total = 0;
    }
  }
}
