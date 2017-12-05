import { Component, OnInit, Input, EventEmitter, Output, NgZone, ElementRef } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { ChangeDetectionNotifierBaseComponent } from './cd-notifier.basecomponent';

@Component({
  selector: 'jaifaim-menu-item',
  template: `
    <h3>{{ item.label }} - {{ item.price | currency }}</h3>
    <jaifaim-quantity-picker (quantityChanged)='notifyQuantityChanged($event)'></jaifaim-quantity-picker>
  `,
  styles: [':host { display:block; }']
})
export class MenuItemComponent extends ChangeDetectionNotifierBaseComponent {
  constructor(zone: NgZone, elementRef: ElementRef) {
    super(zone, elementRef);
  }

  @Input() item: MenuItem;

  @Output() quantityChanged = new EventEmitter<{ item: MenuItem, quantity: number }>();

  notifyQuantityChanged(quantity: number) {
    this.quantityChanged.emit({ item: this.item, quantity });
  }
}
