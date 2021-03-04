import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalcityComponent } from './modalcity/modalcity.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalcityComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalcityComponent]
})
export class SharedModule { }