import { MenuItem } from './menuitem';

export class Menu{
    _id: number;
    restaurants: number;
    items: MenuItem[];

    constructor(obj?:any){
        this._id = obj && obj._id || 0;
        this.restaurants = obj && obj.restaurants || 0;
        this.items = obj && obj.items.map(elem => { new MenuItem(elem)}) || null;
    }
}