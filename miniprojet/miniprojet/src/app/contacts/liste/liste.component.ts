import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/assets/classes/contact';
import { ContactsService } from 'src/assets/services/contacts.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


 




@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  liste?:Contact[];
  dataSource = new MatTableDataSource<Contact>();
  previousUrl: string = null;
  currentUrl: string = null;
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'email', 'description', 'action'];
  flag:boolean = false;
  flag2:boolean = false;


  constructor(private contactService:ContactsService,
              private router:Router,
              ) {

  }

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.contactService.getContacts().subscribe((response)=> {
      console.log("response from api ", response);
      this.dataSource.data = response;
    }, (error) => {
      console.log("Error is ", error);
    })
  }

  maj(element:Contact) {
    this.router.navigate(['/modification/',element.id]);
  }

  deletedContact(i:number) {
    this.contactService.deleteContact(this.dataSource.data[i]);
    window.location.reload();
  }



}

