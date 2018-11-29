import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroservice: HeroService) {
  }

  ngOnInit() {
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 3));
  }

}
