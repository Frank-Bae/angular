import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messageSendingToChild: string = 'here'
  list = ['1', '2']

  constructor() { }

  ngOnInit(): void {
  }

}
