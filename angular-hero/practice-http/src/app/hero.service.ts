import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HeroService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(`${this.url}`);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    const url = `${this.url}/${id}`;
    return this.http.get<Hero>(url);
  }
}
