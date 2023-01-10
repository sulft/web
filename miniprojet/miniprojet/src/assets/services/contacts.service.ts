import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../classes/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  
  constructor(private http: HttpClient,
  ) { }
  
  

  getContacts(){
    return this.http.get<Contact[]>('/api/contacts');
  }

  getContact<Contact>(id:number) {
    return this.http.get<Contact>(`/api/contacts/${id}`);
  }

  addContact(contact:Contact){
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(contact);
    return this.http.post<string>('/api/contacts/', body, {'headers':headers} ).subscribe();
  }

  deleteContact(element:Contact){
    const headers = {'content-type': 'application/json'};
    return this.http.delete<Contact>(`/api/contacts/${element.id}`,{'headers':headers}).subscribe();
  }

  updateContact(contact:Contact) {
    return this.http.put<Contact>(`/api/contacts/${contact.id}`, contact);
  }
}
