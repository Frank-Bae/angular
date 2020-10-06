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

  heroes: Hero[];
  onSelected: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
   this.heroService.getHeroes().subscribe(data => {
     this.heroes = data;
   });
  }

  onSelect(hero) {
    this.onSelected = hero;
    this.messageService.add(`this is the hero id: ${hero.id} and name: ${hero.name}`);
  }
}
