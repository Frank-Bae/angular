import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  // this becomes an attribute
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  // passing ElementRef(wrapping the DOM) to the elementRef variable
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    // can access DOM element through nativeElement
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}

// =======Generally not good practice to use elementREF but good to know=====
