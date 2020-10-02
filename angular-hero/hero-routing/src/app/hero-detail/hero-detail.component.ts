import { Component, OnInit } from '@angular/core';
// ActivatedRoute is needed in order to get a snapshot of the url
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // want to estbalish the component and make a function call
    this.getHero();
  }

  getHero(): void {
    // this extracts the id route parameter after component is created.
    // paraMap holds various route parameter
    // route params are always a string so + is needed to make it a type number
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    // this goes back to the original component you clicked on whether its
    // dashboard or hero list.
    this.location.back();
  }
}
