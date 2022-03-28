import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { MenuList } from '../model/menuList';
import { RestaurantsList } from '../model/restaurantsList';
import { Restaurant } from '../model/restaurantsModel';

const url = "http://localhost:3000/api/restaurants";

@Injectable({
  providedIn: 'root'
})
export class DinningRoomService {

  constructor(private http: HttpClient) { }


  getAll(parameters?: any): Observable<RestaurantsList> {
    let queryParams = {};

    if (parameters) {
      queryParams = {
        params: new HttpParams()
          .set("page", parameters.page || "")
          .set("pageSize", parameters.pageSize || "")
          .set("sort", parameters.sort || "")
          .set("sortDirection", parameters.sortDirection || "")
          .set("filter", JSON.stringify(parameters.filter) || "")
      }
    }

    return this.http.get(url, queryParams).pipe(map(
      elem => { return new RestaurantsList(elem)}
    ))
  }

  getOne(id:number):Observable<Restaurant>{
    return this.http.get(url + "/" + id).pipe(map(
      x => { return new Restaurant(x)}
    ))
  }


  getMenus(id:number):Observable<MenuList>{
    return this.http.get(url + "/" + id + "/menus").pipe(map(
      elem => { return new MenuList(elem)}
    ))
  }
}
