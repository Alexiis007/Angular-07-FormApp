import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit{
  constructor(private fromBuilder : FormBuilder){}

  public myForm : FormGroup = this.fromBuilder.group(
    {
      name:['',[Validators.required,Validators.minLength(3)]],
      price:[0,[Validators.required,Validators.minLength(0)]],
      inStorage:[0,[Validators.required,Validators.minLength(0)]]
    }
  )

  ngOnInit(): void {
    this.myForm.reset({price:0,inStorage:0})
  }

  public onSave():void{
    console.log(this.myForm.value);
    // this.myForm.reset();
    //Reset con valores definidos
    this.myForm.reset({price:0,inStorage:0})
  }

  //valida si el control asignado (field) contiene algun error
  public isValidField(field : string) : boolean | null{
    return this.myForm.controls[field].errors
    && 
    this.myForm.controls[field].touched
  }

  //Cual es el error?
  public getFielError(field : string):string | null {
    
    if(!this.myForm.controls[field].errors)
    {
      return null;
    }

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
        switch(key){
          case 'required':
            return 'Este campo es requerido'
          case 'minlength':
            return `Minimo ${errors['minlength'].requiredLength} caracters`
        }
    }
    return null;
  }
}
