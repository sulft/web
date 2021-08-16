import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

    constructor(private ShoppingListService:ShoppingListService) {
        
    }

    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('A test recipe',
         'This a test',
          'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg',
        [ 
            new Ingredient('eau',2),
            new Ingredient('pain',5)
        ]
        ),
        new Recipe('Pasta','Recipe of Pasta',
        'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x697.jpg',
        [
            new Ingredient('sel',3),
            new Ingredient('beurre',2)
        ]
        )
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]) {
        this.ShoppingListService.addIngredients(ingredients)
    }

}