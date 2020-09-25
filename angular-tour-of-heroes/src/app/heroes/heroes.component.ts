import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // has access to the mock heroes array
  heroes: Hero[];
  selectedHero: Hero;

  // You are declaring access to heroService and messageService
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // call the getHeroes method when initalized
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    const heroObs = this.heroService.getHeroes();

    heroObs.subscribe((data) => {
      this.heroes = data;
    });

    // if you want to unsubscribe
    // const connection = heroObs.subscribe((data) => {
    //   this.heroes = data;
    // });
  }

  // onSelect(hero: Hero): boolean {
  //   return true
  //   this.selectedHero = hero;
  // }

  // void means it shouldn't return anything
  // test(): void {
  //   const test: boolean = this.onSelect(null)
  //   return test
  // }

}
