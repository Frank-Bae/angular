import { asNativeElements, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // this is where the output is emitting data to the (serverCreated) property in
  // the view app component of the attribute directive. So whoever has serverCreated
  // will recieve this information
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  // newServerContent = '';


  // ====== LOCAL REFERENCE =======
  // this will give us access to the dom and we need static true if we plan to use
  // it in ngOnInit. ElementRef provides us access to the dom.
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // When the click event activates this method, it will grab the output and emit
  // this information to the parent app component
  onAddServer() {
    console.log(this.serverContentInput)
    // The this.serverContentInput native element gives us access to the dom
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
