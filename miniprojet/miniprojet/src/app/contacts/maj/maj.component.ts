import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/assets/classes/contact';
import { ContactsService } from 'src/assets/services/contacts.service';
import { Router, ActivatedRoute, ParamMap,  } from '@angular/router';



@Component({
  selector: 'app-maj',
  templateUrl: './maj.component.html',
  styleUrls: ['./maj.component.css']
})
export class MajComponent implements OnInit{
  
  contact:Contact;

  contactForm = new FormGroup({
    prenom: new FormControl('',[Validators.minLength(3),Validators.required]),
    nom: new FormControl('',[Validators.minLength(3),Validators.required]),
    description: new FormControl(''),
    email: new FormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
  });

  constructor(private contactService:ContactsService,
              private _Activatedroute:ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this._Activatedroute.params.subscribe(params => { 
      this.contactService.getContact(params['id']).subscribe((el) =>{
        let element = el[0];
        this.contact = element;
        console.log(this.contact);
        this.contactForm.patchValue({
          prenom: element.prenom,
          nom: element.nom,
          description : element.description,
          email : element.email
        });
      })
    });
  }

  onSubmit() {
    console.log(this.contactForm.value)
    this.contact.prenom = this.contactForm.value.prenom;
    this.contact.nom = this.contactForm.value.nom;
    this.contact.description = this.contactForm.value.description;
    this.contact.email = this.contactForm.value.email;
    //ouverture modal pour confirmer puis envoie à la page d'accueil puis lancer l'api 
    this.contactService.updateContact(this.contact).subscribe(data => 
      console.log(data));
    this.router.navigate(['/accueil']);

  }
}
