import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BasketComponent } from './components/basket.component';
import { MenuComponent } from './components/menu.component';
import { MenuCategoryComponent } from './components/menu-category.component';
import { MenuItemComponent } from './components/menu-item.component';
import { QuantityPickerComponent } from './components/quantity-picker.component';
import { MenuService } from './menu.service';


@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    MenuComponent,
    MenuCategoryComponent,
    MenuItemComponent,
    QuantityPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
