import { Component, OnInit } from '@angular/core';
import { DinningRoomService } from 'src/app/service/dinning-room.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cuisines: string[] = [];

  constructor(private service: DinningRoomService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      elem =>{
        let rest = elem.results;
        let c: string[] = [];

        for(let i in rest){
          if(!c.includes(rest[i].cuisine)){
            c.push(rest[i].cuisine)
          }
        }
         this.cuisines = c.map( x=> {
          return x.charAt(0).toUpperCase() + x.slice(1);
        })
      }
    )


  }

}
