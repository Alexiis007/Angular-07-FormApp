import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  constructor(private formBuilder : FormBuilder){}

  public myForm : FormGroup = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames:this.formBuilder.array([
      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required]
    ]),
  })

  public onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray
  }

  public isValidField(field : string) : boolean | null{
    return this.myForm.controls[field].errors
    && 
    this.myForm.controls[field].touched
  }

  //validacion de controles array
  public isValidFieldArray(FormArray : FormArray, index : number){
    return FormArray.controls[index].errors
    && 
    FormArray.controls[index].touched
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
