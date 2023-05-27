import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { shoppinglistservice } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  Ingredient : Ingredients[] | undefined;
  constructor( private Shoppinglistservice :shoppinglistservice ){}
  // Ingredient : Ingredients[] =[
  //   new Ingredients('Apple',5),
  //   new Ingredients('Mango',10)
  // ];
  ngOnInit(): void {
    this.Ingredient = this.Shoppinglistservice.getShoppinglistservice();
    this.Shoppinglistservice.IngredientsChanged.subscribe(
      ( Ingredient : Ingredients[] )=>{ 
        this.Ingredient = Ingredient;
      }
    )
  }
  // onIngredientsAdd(Ingredients :Ingredients){
  //   this.Ingredient.push(Ingredients);
  // }
  // onIngredientsDelete(Ingredients :Ingredients){
  //   this.Ingredient.pop(Ingredients);
  // }
}
