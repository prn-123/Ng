import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CcsComponent } from './ccs/ccs.component';

@NgModule({
  declarations: [
    AppComponent, CcsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CcsComponent]
})
export class AppModule { }
