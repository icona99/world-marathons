import { ValidatorFn } from "@angular/forms";


export function passwordMatchValidator(passwordControl: string,repeatPasswordControl: string): ValidatorFn {
    return (control) => {
        const passFirst = control.get(passwordControl);
        const passSecond = control.get(repeatPasswordControl);
        const areMatching = passFirst?.value == passSecond?.value;

        return areMatching ? null : { passwordMatchValidator: true }
    }
}