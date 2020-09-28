import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
