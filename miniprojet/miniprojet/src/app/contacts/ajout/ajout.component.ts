import { Component} from '@angular/core';
import { Contact } from 'src/assets/classes/contact';
import { ContactsService } from 'src/assets/services/contacts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  contactForm = new FormGroup({
    prenom: new FormControl('',[Validators.minLength(3),Validators.required]),
    nom: new FormControl('',[Validators.minLength(3),Validators.required]),
    description: new FormControl(''),
    email: new FormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
  });
  contact?:Contact = {
    "id":0,
    "prenom":"",
    "nom":"",
    "description":"",
    "email":""
  };

  constructor(private contactService:ContactsService,
              private router:Router
  ) {

  }

  onSubmit() {
    this.contact.prenom = this.contactForm.value.prenom;
    this.contact.nom = this.contactForm.value.nom;
    this.contact.description = this.contactForm.value.description;
    this.contact.email = this.contactForm.value.email;
    this.contactService.addContact(this.contact);
    this.router.navigate(['accueil']);
  }
}
