import { ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  
    const regExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`); //^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

    return (control) => {
        const isEmailValid = control.value === '' || regExp.test(control.value);
        return isEmailValid ? null : { emailValidator: true }
    }
}

