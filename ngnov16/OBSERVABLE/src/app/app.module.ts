 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'hero', component: HeroComponent},
    {path: 'herodetail/:id', component: HeroDetailsComponent}])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
