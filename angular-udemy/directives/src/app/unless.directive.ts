import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// This is our own custom structural directive that mimicks the ngif

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // the set acts like a function "function appUnless() {}"
  @Input() set appUnless(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
