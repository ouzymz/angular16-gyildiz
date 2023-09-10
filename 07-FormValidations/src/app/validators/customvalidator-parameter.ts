import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CustomvalidatorParameter(count: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const ascii: string[] = [];
    for (let i = 65; i <= 90; i++) ascii.push(String.fromCharCode(i));

    let state: boolean;
    for (let y = 0; y < count; y++) {
      if (ascii.indexOf(value[y]) == -1) {
        state = false;
        break;
      }
    }
    if (!state) return { CapitalLetter: true };
    return null;
  };
}
