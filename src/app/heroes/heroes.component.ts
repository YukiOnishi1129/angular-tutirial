import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };

  heroes: Hero[] = [];
  selectedHero?: Hero;

  // service層をDIでインスタンス化
  constructor(private heroService: HeroService) {}

  // ライフサイクルフック
  // コンポーネント作成直後に処理を実行
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * onSelect
   * @param hero
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /**
   * getHeroes
   */
  getHeroes(): void {
    // 非同期処理でデータ取得を実行する
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
