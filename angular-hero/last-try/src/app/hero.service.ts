import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class HeroService {
  private url = 'https://jsonplaceholderabc.typicode.com/posts';
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  constructor(private messageService: MessageService, private http: HttpClient) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.url)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(error => {
          console.log('error:', error);
          // still need to return an observable
          return of(error);
        })
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.url}/${id}`;
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(url);
  }
}
