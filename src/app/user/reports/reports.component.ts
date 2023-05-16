import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FilterModelComponent } from '../filter-model/filter-model.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [
    trigger('dialogContainer', [
      state('start', style({
        transform: 'translateY(0%)'
      })),
      // other animation states and transitions
    ])
  ]
})
export class ReportsComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  filter(){
    console.log("enter into ")
    const dialogRef=this.dialog.open(FilterModelComponent,{
      data:{
    wholedata:''
      },
      panelClass:'my_pannel',
      width:"60vw",
      height:"80vh",
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){

      }
    });
  }




}
