import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ServiceService } from 'src/app/services/service.service'
import { ModalcityComponent } from 'src/app/shared/modalcity/modalcity.component';

export interface DialogData {
  citycode: string;
  cityname: string;
  status: string;
  provinceid: string;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  displayedColumns: string[] = ['cityId', 'cityCode', 'Province', 'cityName', 'status', 'ACCION'];
  dataSource: any;
  provinceid: number
  citycode: string
  cityname: string
  status: string

  constructor(private service: ServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.service.getCiudades().subscribe(data => {
      this.dataSource = data
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalcityComponent, {
      width: '250px',
      data: { provinceid: this.provinceid }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.citycode = result.citycode;
        this.cityname = result.cityname;
        this.status = result.status;

        console.log(this.citycode, this.cityname, this.status);
      }
      else
        return

    });
  }

  modificar(): void {
    const dialogRef = this.dialog.open(ModalcityComponent, {
      width: '250px',
      data: { provinceid: this.provinceid, status: "A", citycode: "SDE", cityname: "PRUEBA" }
    });
  }

}
