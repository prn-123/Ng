import { HeroService } from './hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PournamiComponent } from './pournami/pournami.component';
import { AryaComponent } from './arya/arya.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AnjaliComponent } from './anjali/anjali.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PournamiComponent,
    AryaComponent,
    HeroDetailComponent,
    AnjaliComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'pournami', component: PournamiComponent},
  {path: 'arya', component: AryaComponent},
  {path: 'herodetail', component: HeroDetailComponent},
  {path: 'anjali', component: AnjaliComponent}])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
