import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() num: number;

  @Input() full: string;
  @Input() empty: string;

  fullArray;
  emptyArray;
  
  constructor() { }

  ngOnInit(): void {
    this.fullArray = new Array(this.num);
    this.emptyArray = new Array(5 - this.num)
  }

}
