import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { shoppinglistservice } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit , OnDestroy{
  subscription: Subscription = new Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredients;
 @ViewChild('f')slform!: NgForm;
 @ViewChild('amountInput')amountInputRef!: ElementRef; 
//  @Output() IngredientsAdd = new EventEmitter<Ingredients>();
//  @Output() IngredientsDelete = new EventEmitter<Ingredients>();
 constructor( private Shoppinglistservice :shoppinglistservice ){}
 ngOnInit(): void {
   this.subscription = this.Shoppinglistservice.startedEditing.subscribe((index : number)=>{
    this.editedItemIndex = index;
    this.editMode = true;
    this.editedItem = this.Shoppinglistservice.getIngredient(index);
    this.slform.setValue({
      name : this.editedItem.name,
      amount : this.editedItem.amount
    })
   });
 }
  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if(this.editMode){
      this.Shoppinglistservice.updatedIngredient(this.editedItemIndex, newIngredient);
    }else{
    // this.IngredientsAdd.emit(newIngredient);
      this.Shoppinglistservice.addIngredients(newIngredient);
    }
  this.editMode = false;
  }
  onDeleteItem(){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredients(ingName, ingAmount);
    // this.Shoppinglistservice.DeleteIngredients(newIngredient);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onclearItem(){
    this.slform.reset();
    this.editMode = false;
  }
}
