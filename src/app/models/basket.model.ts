import { MenuItem } from './menu-item.model';


export interface Basket {
    items: { quantity: number, item: MenuItem }[];
}
