import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit{
constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset({wantNotifications:true});
  }

  public myForm : FormGroup = this.formBuilder.group({
    gender:['M',Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndCOnditions: [false, Validators.requiredTrue]
  })

  public person = {
    gender:'M',
    wantNotifications:false,
  }

  public isValidField(field : string) : boolean | null{
    return this.myForm.controls[field].errors
    && 
    //Este de aqui revisa si el control a sido tocado
    this.myForm.controls[field].touched
  }

  public onSave(){
    this.myForm.markAllAsTouched();
    
    if(this.myForm.invalid) return
    
    const {termsAndCOnditions, ...DataMyForms} = this.myForm.value;
    this.person = DataMyForms;
  }


}
