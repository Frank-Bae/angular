import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url).pipe(
      tap((_) => this.log('succesfuly fetched heroes')),
      catchError(err => {
        // console.log('handling error locally', err);
        return throwError(err);
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.url}/${id}`)
      .pipe(
        tap((_) => this.log(`fetched hero id=${id}`)),
        catchError(err => {
          return throwError(err);
        })
      );
    }
}
