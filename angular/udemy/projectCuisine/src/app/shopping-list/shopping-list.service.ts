import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChange = new EventEmitter<Ingredient[]>()

    ingredients:Ingredient[] = [
        new Ingredient('Apples',3),
        new Ingredient('Bananas',1),
    ];

    selectedIngredients = new EventEmitter;

    getIngredients() {
        return this.ingredients.slice()
    }

    addingIngredientService(value:Ingredient) {
        console.log(value);
        this.ingredients.push(new Ingredient(value.name,value.amount))
        this.ingredientsChange.emit(this.ingredients.slice())
    }
}