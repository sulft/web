import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[] = [
    new Recipe('A test recipe', 'This a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg'),
    new Recipe('Pasta','Recipe of Pasta','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
