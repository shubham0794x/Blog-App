import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {

  static nameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /\d/;
    if (regex.test(value)) {
      return { invalidName: true }
    }
    return null;
  }

  static ageValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if(value < min || value > max) {
        return { invalidAge: true };
      }
      return null;
    }
  }

  static checkPassword(control: AbstractControl): ValidationErrors | null {
    if (control.get('password')?.value !== control.get('passwordConfirmation')?.value) {
      return { samePassword: true }
    }
    return null;
  }

}