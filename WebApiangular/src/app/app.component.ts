import { Contact } from './contact';
import {  HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'WebApi';
  contacts: Contact[];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<Contact[]>('http://localhost:58977/api/contacts')
    .subscribe(c => this.contacts = c);
  }
}
