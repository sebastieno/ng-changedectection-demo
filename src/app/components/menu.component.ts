import { Component, OnInit, Input, Output, EventEmitter, ElementRef, NgZone } from '@angular/core';
import { Menu } from '../models/menu.model';
import { MenuItem } from '../models/menu-item.model';
import { ChangeDetectionNotifierBaseComponent } from './cd-notifier.basecomponent';

@Component({
  selector: 'jaifaim-menu',
  template: `
   <jaifaim-menu-category *ngFor='let category of menu.categories' [category]='category' (quantityChanged)='notifyQuantityChanged($event)'></jaifaim-menu-category>
  `,
  styles: [':host { display:block; }']
})
export class MenuComponent extends ChangeDetectionNotifierBaseComponent {
  constructor(zone: NgZone, elementRef: ElementRef) {
    super(zone, elementRef);
  }

  @Input() menu: Menu;

  @Output() quantityChanged: EventEmitter<{ item: MenuItem, quantity: number }> = new EventEmitter<{ item: MenuItem, quantity: number }>();

  notifyQuantityChanged(quantity: { item: MenuItem, quantity: number }) {
    this.quantityChanged.emit(quantity);
  }
}
