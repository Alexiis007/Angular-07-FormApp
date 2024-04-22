import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{
    
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const email = control.value;    

        const httpCallObservable = new Observable<ValidationErrors | null>((subscriber)=>{
            //Este email no puede ser christianalexis0918@gmail.com porque ya existe supuestamente
            if(email === 'christianalexis0918@gmail.com')
            {
                subscriber.next({emailTaken:true});
                subscriber.complete();
            }
            subscriber.next(null)
            subscriber.complete();
        });
        return httpCallObservable;
  
    }
    
}