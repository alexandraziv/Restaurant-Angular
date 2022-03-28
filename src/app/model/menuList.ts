import { Menu } from './menuModel';
export class MenuList{
    results: Menu;
    count: number;

    constructor(obj?:any){
        this.results = obj && obj.results[0] || 0;
        this.count = obj && obj.count || 0;
    }
}