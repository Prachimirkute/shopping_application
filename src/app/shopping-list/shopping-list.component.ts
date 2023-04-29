import { Component } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredient : Ingredients[] =[
    new Ingredients('Apple',5),
    new Ingredients('Mango',10)
  ];
  onIngredientsAdd(Ingredients :Ingredients){
    this.Ingredient.push(Ingredients);
  }
}
