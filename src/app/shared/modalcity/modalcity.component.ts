import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/modules/parameters/city/city.component';

@Component({
  selector: 'app-modalcity',
  templateUrl: './modalcity.component.html'
})
export class ModalcityComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalcityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}