import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("nameInput") name : ElementRef;
  @ViewChild("amountInput") amount : ElementRef;
  @Output() addIngredient = new EventEmitter<{name:string,amount:number}>()

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.addIngredient.emit({name: this.name.nativeElement.value, amount: this.amount.nativeElement.value})
  }
}
