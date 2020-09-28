import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  onSelect: Hero;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    const heroObs = this.heroesService.getHeroes();

    heroObs.subscribe((data) => {
      this.heroes = data;
    });
  }
  onSelected(hero: Hero): void {
    this.onSelect = hero;
  }

}
