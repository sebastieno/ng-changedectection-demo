import { Component, OnInit, Input, EventEmitter, Output, ElementRef, NgZone } from '@angular/core';
import { MenuCategory } from '../models/menu-category.model';
import { MenuItem } from '../models/menu-item.model';
import { ChangeDetectionNotifierBaseComponent } from './cd-notifier.basecomponent';

@Component({
  selector: 'jaifaim-menu-category',
  template: `
    <h2>{{ category.label }}</h2>
    <jaifaim-menu-item *ngFor='let item of category.items' [item]='item' (quantityChanged)='notifyQuantityChanged($event)'></jaifaim-menu-item>
  `,
  styles: [':host { display:block; }']
})
export class MenuCategoryComponent extends ChangeDetectionNotifierBaseComponent {
  constructor(zone: NgZone, elementRef: ElementRef) {
    super(zone, elementRef);
  }
  @Input() category: MenuCategory;

  @Output() quantityChanged: EventEmitter<{ item: MenuItem, quantity: number }> = new EventEmitter<{ item: MenuItem, quantity: number }>();

  notifyQuantityChanged(quantity: { item: MenuItem, quantity: number }) {
    this.quantityChanged.emit(quantity);
  }
}
