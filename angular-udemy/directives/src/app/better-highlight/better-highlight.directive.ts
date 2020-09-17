import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  // Having the Renderer2 is the best way of directl accessing the dom
  constructor(private elRef:ElementRef, private renderer : Renderer2) { }

  // @Input() defaultColor: string;
  // @Input('appBetterHighlight') highlightColor: string;

  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'

  // on the element that it sits in, please access the style property
  // a better way to bind style
  // ======GO WITH THE HOSTBINDING AND HOSTLISTENER=======
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  // The HostListener makes it more dynamic and is reacting to users event
  // or any event listeners that occurs

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue',);
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white',);
    this.backgroundColor = this.highlightColor;
    this.color = 'white'

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent',);
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black',);
    this.backgroundColor = this.defaultColor;
    this.color = 'black'
  }
}
