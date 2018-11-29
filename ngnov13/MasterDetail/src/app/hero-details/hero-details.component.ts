import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor() { }


  @Input() hero:Hero;

  
  ngOnInit() {
  }

}
