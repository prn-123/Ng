import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
heroes=HEROES;


selectedHero:Hero;


onSelect(hero:Hero)
{
this.selectedHero=hero;
}
}