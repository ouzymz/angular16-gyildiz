import { AbstractControl, ValidationErrors } from '@angular/forms';

export function Customvalidator(
  control: AbstractControl
): ValidationErrors | null {
  
  const value = control.value;
  const ascii: string[] = [];
  for (let i = 65; i <= 90; i++) ascii.push(String.fromCharCode(i));

  if (ascii.indexOf(value[0])==-1) return { CapitalLetter: true };

  return null;
}
