import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nestedFormArray';
  etudiantForm:FormGroup;
  
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.etudiantForm = this.fb.group({
      etudiant: this.fb.array([]),
    })
  }

  get etudiants() {
    return this.etudiantForm.get("etudiant") as FormArray
  }

  nouvelleEtudiant() {
    return this.fb.group({
      id:0,
      nom:'',
      prenom:'',
      specialite:this.fb.array([])
    })
  }

  ajoutEtudiant() {
    this.etudiants.push(this.nouvelleEtudiant());
  }

  removeEtudiant(i:number) {
    this.etudiants.removeAt(i);
  }

  specialites(etuI:number):FormArray {
    return this.etudiants.at(etuI).get("specialite") as FormArray
  }

  ajoutSpecialite(etuI) {
    this.specialites(etuI).push(this.nouvelleSpecialiteEtudiant());
  }

  nouvelleSpecialiteEtudiant() {
    return this.fb.group({
      nomSpe:'',
      annee:null,
      specialite:this.fb.array([])
    })
  }

  removeSpecialite(etuI:number,speI:number) {
    this.specialites(etuI).removeAt(speI);
  }

  onSubmit() {
    console.log(this.etudiantForm.value);
  }
}

export class Etudiant {
  id:number;
  nom:string;
  prenom:string;
  specialite:Specialite;
}

export class Specialite {
  nomSpe:string;
  annee:string;
}