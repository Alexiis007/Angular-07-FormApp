import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { canBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/validators/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private formBuilder : FormBuilder, private validatorService : ValidatorsService){}

  public myForm : FormGroup = this.formBuilder.group({
    //validaciones syncronas se agregan en el primer [] asyncronas en el segundo []
    //validacion de nombre y apellido
    name:['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    //validacion de correo
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[new EmailValidator()]],
    username:['',[Validators.required,this.validatorService.canBeStrider]],
    password:['',[Validators.required]],
    password2:['',[Validators.required]],
  }, {
    validators:[
      this.validatorService.isFieldOneEqualFieldTwo('password','password2')
    ]}
  );

  public isValidFiel(field : string){
     return this.validatorService.isValidField(this.myForm, field);
  }

  public onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
