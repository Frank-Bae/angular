import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  onSelect: Hero;

  constructor(private heroService: HeroService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
    this.messageService.add('this message service is fetched');
  }

  onSelected(hero: Hero): void {
    this.onSelect = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
