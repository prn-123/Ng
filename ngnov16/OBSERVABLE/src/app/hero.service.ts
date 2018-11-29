import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor() { }
}
