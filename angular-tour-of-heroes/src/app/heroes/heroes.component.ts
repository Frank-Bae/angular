import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // has access to the mock heroes array
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // onSelect(hero: Hero): boolean {
  //   return true
  //   this.selectedHero = hero;
  // }

  //void means it shouldn't return anything
  // test(): void {
  //   const test: boolean = this.onSelect(null)
  //   return test
  // }

}
