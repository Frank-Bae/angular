// import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core'

// @Directive({
//   selector: '[appDropdown]'
// })

// // need open

// export class DropdownDirective implements OnInit {
//   @HostBinding('class.open') isOpen = false;

//   ngOnInit() {

//   }

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//  }
// }


//This allows closing the dropdown from anywhere, by placing the listener not on
//the dropdown, but on the document
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) { }
}
