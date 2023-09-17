import { Directive } from '@angular/core';

@Directive({
  selector: '[appExampleDirective]',
  standalone: true,
})
export class ExampleDirectiveDirective {
  constructor() {
    console.log('ExampleDirectiveDirective constructor');
  }
}
