import { Menu } from './../../model/menuModel';
import { DinningRoomService } from 'src/app/service/dinning-room.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-retourantdetails',
  templateUrl: './retourantdetails.component.html',
  styleUrls: ['./retourantdetails.component.css']
})
export class RetourantdetailsComponent implements OnInit {

  @Input() name;

  menus: Menu;

  constructor(public activeModal: NgbActiveModal, private service: DinningRoomService) { }

  ngOnInit(): void {

    this.service.getMenus(this.name._id).subscribe(
      x => {
        this.menus = x.results;
      }
    )
  }

}
