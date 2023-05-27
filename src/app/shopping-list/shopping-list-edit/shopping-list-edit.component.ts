import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { shoppinglistservice } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
 @ViewChild('nameInput')nameInputRef!: ElementRef;
 @ViewChild('amountInput')amountInputRef!: ElementRef; 
//  @Output() IngredientsAdd = new EventEmitter<Ingredients>();
 @Output() IngredientsDelete = new EventEmitter<Ingredients>();
 constructor( private Shoppinglistservice :shoppinglistservice ){}
  onAddItem(){
    console.log("hello");
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    // this.IngredientsAdd.emit(newIngredient);
    this.Shoppinglistservice.addIngredients(newIngredient);
  }
  // onDeleteItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredients(ingName, ingAmount);
  //   this.IngredientsDelete.emit(newIngredient);
  // }
  // onClearItem(){

  // }
}
