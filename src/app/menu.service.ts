import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { of } from 'rxjs/observable/of';
import { Menu } from './models/menu.model';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Observable<Menu> {
    const menu: Menu = {
      categories: [{
        label: 'Menu',
        items: [{
          id: 1,
          label: 'Menu Enfant (< 8 ans)',
          price: 6.9
        }, {
          id: 2,
          label: 'Menu Etudiant',
          price: 9.9
        }]
      },
      {
        label: 'Entrées',
        items: [{
          id: 3,
          label: 'Salade de choux',
          price: 2.9
        }, {
          id: 4,
          label: 'Tomates Mozza',
          price: 3.5
        }]
      },
      {
        label: 'Plat',
        items: [{
          id: 5,
          label: 'Entrecôte',
          price: 14.5
        }, {
          id: 6,
          label: 'Cordon bleu',
          price: 7.9
        }, {
          id: 7,
          label: 'Pizza 4 fromages',
          price: 12.5
        }, {
          id: 8,
          label: 'Cabillaud rôti',
          price: 17.8
        }]
      },
      {
        label: 'Dessert',
        items: [{
          id: 9,
          label: 'Fondant au chocolat',
          price: 6.0
        }, {
          id: 10,
          label: 'Plateau de fromages',
          price: 6.0
        }, {
          id: 11,
          label: 'Tiramisu',
          price: 6.0
        }, {
          id: 12,
          label: 'Tarte aux poires',
          price: 6.0
        }]
      }]
    };

    return ArrayObservable.of(menu);
  }
}
