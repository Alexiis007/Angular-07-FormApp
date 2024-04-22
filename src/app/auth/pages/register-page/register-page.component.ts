import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { canBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private formBuilder : FormBuilder){}

  public myForm : FormGroup = this.formBuilder.group({
    //validaciones syncronas se agregan en el primer [] asyncronas en el segundo []
    //validacion de nombre y apellido
    name:['',[Validators.required, Validators.pattern(firstNameAndLastnamePattern)]],
    //validacion de correo
    email:['',[Validators.required, Validators.pattern(emailPattern)]],
    username:['',[Validators.required,canBeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]],
  });

  public isValidFiel(field : string){

  }

  public onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
