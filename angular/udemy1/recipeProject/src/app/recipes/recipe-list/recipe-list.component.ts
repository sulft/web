import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Cherry Bavarois','Ceci est un cherry','https://frenchgirlcuisine.com/wp-content/uploads/mini-cherry-bavarois-3.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
