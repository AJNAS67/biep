import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { FilterModelComponent } from '../filter-model/filter-model.component';

import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [
    trigger('dialogContainer', [
      state('start', style({
        transform: 'translateY(0%)'
      })),
      transition('void => start', animate('200ms')),
      transition('start => void', animate('200ms')),
    ])
  ]
})
export class ReportsComponent implements OnInit {



  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 0,
    navSpeed: 500,
    navText: [ '<i class="ri-arrow-left-s-fill"></i>', '<i class="ri-arrow-right-s-fill"></i>' ],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }



  filter() {
    const dialogRef=this.dialog.open(FilterModelComponent,{
     

    });
    dialogRef.afterClosed().subscribe(response=>{

    })
  }




}


