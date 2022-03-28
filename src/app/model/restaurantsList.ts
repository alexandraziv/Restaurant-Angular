import { Restaurant } from "./restaurantsModel";

export class RestaurantsList{
    results: Restaurant[];
    count: number;

    constructor(obj?: any) {
        
        this.results = obj && obj.results.map( (elem: any) => { return new Restaurant(elem)}) || [];
        this.count = obj && obj.count || 0;
    }
}