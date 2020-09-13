import { Component, OnInit, Input, OnChanges, SimpleChanges,
   DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
 OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {
  // With the input in place, we are able to access this property to the world
  // any parent or component is now able to bind to element
  // this is an alias, if you want to bind to this property, it has to be
  // srvElement. We are passing data from the parent to the child
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;


  // lifecycle hook
  constructor() {
    console.log('constructor called')
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes)
   }

  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('Text Content ' + this.header.nativeElement.textContent )
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
    console.log('Text Content ' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
}
