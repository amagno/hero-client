import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';
import { Hero } from '../models/hero';

const URL = 'http://localhost:3000';

@Injectable()
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${URL}/api/hero`).pipe(
      tap(heroes => console.log('Heroes fetched!', heroes)),
    );
  }
}
