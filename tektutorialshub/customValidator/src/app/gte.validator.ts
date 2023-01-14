import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function gte(val: number): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const v = control.value;
        if (isNaN(v)) {
            return { 'gte': true, 'requiredValue': val }
        }      
       
        if (v <= 10) {
            return { 'gte': true, 'requiredValue': val }
        } 
        return null
    }
    
}

