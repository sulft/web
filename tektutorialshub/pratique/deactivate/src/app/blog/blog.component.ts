import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactivateComponent } from '../deactivate.guard';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements IDeactivateComponent, OnInit {

  url:string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.url = this._router.url.replace('/','');
  }
  
  confirmer() : boolean {
    if (confirm(`Voulez-vous quitter la page : ${this.url} ?`)) {
			return true
		} else {
			return false
		}
	}
}
