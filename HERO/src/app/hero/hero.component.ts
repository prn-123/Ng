import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroservice: HeroService) {
    this.heroes = this.heroservice.getHeroes();
  }

  ngOnInit() {
  }

}
