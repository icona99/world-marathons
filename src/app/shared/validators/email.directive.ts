import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from '../email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator, OnChanges {

  @Input() appEmail: string[] = []

  constructor() { }

  validator: ValidatorFn = () => null;

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail']
    if (currentValue) {
      this.validator = emailValidator()
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const result=emailValidator()
    return result(control)
  };
}
