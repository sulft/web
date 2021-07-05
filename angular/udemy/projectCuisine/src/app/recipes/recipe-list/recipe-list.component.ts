import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[] = [
    new Recipe('A test recipe', 'This a test', 'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg'),
    new Recipe('Pasta','Recipe of Pasta','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes)
  }

}
