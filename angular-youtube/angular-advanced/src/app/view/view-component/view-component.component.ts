import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
// this is what is being exported if you want other components to use this component
export class ViewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
