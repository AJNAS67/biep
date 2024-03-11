import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-filter-model',
  templateUrl: './filter-model.component.html',
  styleUrls: ['./filter-model.component.scss'],
 

})
export class FilterModelComponent implements OnInit {

  constructor(private dialogConfig:MatDialogRef<FilterModelComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogConfig.close()
  }
}
