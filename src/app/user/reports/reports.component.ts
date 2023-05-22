import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { FilterModelComponent } from '../filter-model/filter-model.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';


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

  bsModalRef!: BsModalRef;
  constructor(private dialog: MatDialog,private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  // filter(){

  //   const dialogRef = this.dialog.open(FilterModelComponent, {
  //      height: '400px',
  //  width: '300px',
  // panelClass:'filter-model',

  //   });

  //   dialogRef.afterClosed().subscribe(result => {

  //   });
  // }


  filter() {

  }




}
