import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // recipes:Recipe[] = [
  //   new Recipe('Cherry Bavarois','Ceci est un tajin','https://frenchgirlcuisine.com/wp-content/uploads/mini-cherry-bavarois-3.jpg')
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
