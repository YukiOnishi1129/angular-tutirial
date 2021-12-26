import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // 非同期処理でデータ取得を実行する
    const heroes = of(HEROES);
    this.messageService.add(`HeroService: fetched heroes`);
    return heroes;
  }
}
