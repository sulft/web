import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("nameInput") name : ElementRef;
  @ViewChild("amountInput") amount : ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  add() {
    const newIngredients = new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value)
    this.shoppingListService.addingIngredientService(newIngredients)
  }
}
