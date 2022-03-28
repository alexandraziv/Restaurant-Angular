import { DinningRoomService } from './../service/dinning-room.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurantsModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restourants',
  templateUrl: './restourants.component.html',
  styleUrls: ['./restourants.component.css']
})
export class RestourantsComponent implements OnInit {

  parameters ={
    page: 1,
    pageSize: 12,
    sort: "price",
    sortDirection: "desc",
    filter: {
      cuisine: "",
      priceFrom: 0,
      priceTo: 5
    }
  }

  restaurants: Restaurant[];
  numberOfRestaurants: number;

  constructor(private service: DinningRoomService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll()

    this.route.params.subscribe(
      x=> {
        let cuisine = x['cuisine'];
        this.parameters.filter.cuisine = cuisine;
        this.getAll()
      }
    )    
  }


  getAll(){
    this.service.getAll(this.parameters).subscribe(
      x=> {
        this.restaurants = x.results;
        this.numberOfRestaurants = x.count;
      }
    )
  }

}
