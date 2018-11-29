import { Component, OnInit } from '@angular/core';
import { ClsHeroes } from '../cls-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
objheroes:ClsHeroes={id:1,name:'Mohan Lal'};
}
