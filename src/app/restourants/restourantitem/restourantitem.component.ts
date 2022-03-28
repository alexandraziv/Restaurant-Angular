import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/model/restaurantsModel';
import { RetourantdetailsComponent } from '../retourantdetails/retourantdetails.component';

@Component({
  selector: 'app-restourantitem',
  templateUrl: './restourantitem.component.html',
  styleUrls: ['./restourantitem.component.css']
})
export class RestourantitemComponent implements OnInit {

  @Input() restourant: Restaurant;

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(RetourantdetailsComponent);
    modalRef.componentInstance.name = this.restourant;
  }

}
