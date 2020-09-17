import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  // Having the Renderer2 is the best way of directl accessing the dom
  constructor(private elRef:ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
  }

  // The HostListener makes it more dynamic and is reacting to users event
  // or any event listeners that occurs

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue',);
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white',);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent',);
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'lightblue',);
  }
}
