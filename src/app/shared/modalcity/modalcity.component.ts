import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/modules/parameters/city/city.component';

@Component({
  selector: 'app-modalcity',
  templateUrl: './modalcity.component.html'
})
export class ModalcityComponent implements OnInit {
  registroForm: FormGroup
citycode : string
cityname : string
status : string

  constructor(
    public dialogRef: MatDialogRef<ModalcityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder) { 

      this.registroForm = this.fb.group(
        {
          cityval: ['', [Validators.required]],
          provinceval: ['', [Validators.required]],
          statusval: ['', [Validators.required]]
        }
      );
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  guardar(){
    const {value, valid} = this.registroForm;
    if(valid){

      this.data.citycode = this.registroForm.get('cityval')?.value
      this.data.cityname = this.registroForm.get('provinceval')?.value
      this.data.status = this.registroForm.get('statusval')?.value
        this.dialogRef.close(this.data);
    }  
  }

  getErrorMessage(field: string)
  {
    let message;
    if (this.registroForm.get(field)?.errors?.required){
      message= 'Debe ingresar un valor.'
    } 

    return message;
  }

  isValidField(field: string)
  {
    return (
      (this.registroForm.get(field)?.touched || this.registroForm.get(field)?.dirty ) &&
      !this.registroForm.get(field)?.valid
    );
  }



}