import { Component } from '@angular/core';
import {Family} from './family';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome';
   obj:Family[]=[{id:1,name:'PRN',location:'PTA'},
                 {id:2,name:'ASP',location:'PTA'}];
   Hello()
   {
     alert('Hello');
   }

}
