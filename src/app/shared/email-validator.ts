import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return (control: AbstractControl): ValidationErrors | null => {
        const isEmailValid = control.value === '' || regExp.test(control.value);
        return isEmailValid ? null : { emailValidator: true };
    };
}

