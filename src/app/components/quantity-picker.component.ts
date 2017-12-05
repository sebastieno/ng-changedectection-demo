import { Component, OnInit, EventEmitter, Output, ElementRef, NgZone, Input, SimpleChanges } from '@angular/core';
import { ChangeDetectionNotifierBaseComponent } from './cd-notifier.basecomponent';

@Component({
  selector: 'jaifaim-quantity-picker',
  template: `
   <button (click)='decrement()' [disabled]='value <=0'>-</button>
   {{ value }}
   <button (click)='increment()'>+</button>
  `,
  styles: [':host { display:block; }']
})
export class QuantityPickerComponent extends ChangeDetectionNotifierBaseComponent {
  constructor(zone: NgZone, elementRef: ElementRef) {
    super(zone, elementRef);
  }

  value = 0;

  @Output() quantityChanged: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.value++;
    this.quantityChanged.emit(this.value);
  }

  decrement() {
    this.value--;
    this.quantityChanged.emit(this.value);
  }
}
