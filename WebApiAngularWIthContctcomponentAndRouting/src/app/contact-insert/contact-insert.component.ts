import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-insert',
  templateUrl: './contact-insert.component.html',
  styleUrls: ['./contact-insert.component.css']
})
export class ContactInsertComponent implements OnInit {

  constructor(private contactservice: ContactService) { }

  contact: Contact;
  contacts: Contact[];
  ngOnInit() {
      this.newBatch();
    }

  newBatch(): void {
      this.contact = {
        contactId: null,
        contactName: '',
        location: ''
      };
  }
  saveContactData(): void {
    this.contactservice.saveData(this.contact)
    .subscribe(b => this.contacts.push(b));
    }
}

