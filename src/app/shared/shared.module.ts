import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalcityComponent } from './modalcity/modalcity.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ModalcityComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [ModalcityComponent]
})
export class SharedModule { }