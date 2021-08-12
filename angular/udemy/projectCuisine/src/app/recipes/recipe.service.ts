import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('A test recipe', 'This a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg'),
        new Recipe('Pasta','Recipe of Pasta','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg')
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }

}