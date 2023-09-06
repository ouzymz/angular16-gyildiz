import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomFor]',
})
export class CustomForDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input()
  set appCustomFor(count: number) {
    for (let i = 0; i < count; i++)
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        index: `${i}. eleman`,
        indexPlus: i + 1
      });
  }
}
