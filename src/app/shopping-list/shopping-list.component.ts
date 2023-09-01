import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { shoppinglistservice } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  Ingredient: Ingredients[] = [];
  private ngchangeSub: Subscription = new Subscription;

  constructor( private Shoppinglistservice :shoppinglistservice){}
  // Ingredient : Ingredients[] =[
  //   new Ingredients('Apple',5),
  //   new Ingredients('Mango',10)
  // ];
  ngOnInit(): void {
    this.Ingredient = this.Shoppinglistservice.getShoppinglistservice();
    this.ngchangeSub = this.Shoppinglistservice.IngredientsChanged.subscribe(
      ( Ingredient : Ingredients[] )=>{ 
        this.Ingredient = Ingredient;
      }
    );
  }
  ngOnDestroy(): void {
    this.ngchangeSub.unsubscribe();
  }
  onEditItem(index:number){
     this.Shoppinglistservice.startedEditing.next(index);
  }
  // onIngredientsAdd(Ingredients :Ingredients){
  //   this.Ingredient.push(Ingredients);
  // }
  // onIngredientsDelete(Ingredients :Ingredients){
  //   this.Ingredient.pop(Ingredients);
  // }
}
