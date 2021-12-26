import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // service層をDIでインスタンス化
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // ライフサイクルフック
  // コンポーネント作成直後に処理を実行
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * getHeroes
   */
  getHeroes(): void {
    // 非同期処理でデータ取得を実行する
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
