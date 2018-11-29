import { Contact } from './../contact';
import { CONTACTS } from './../mock-contacts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = CONTACTS;
  constructor() { }
  selectedContact: Contact;
  onSelect(contact: Contact) {
    this.selectedContact = contact;
  }

  ngOnInit() {
  }

}
