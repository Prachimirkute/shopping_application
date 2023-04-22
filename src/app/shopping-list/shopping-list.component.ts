import { Component } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients : Ingredients[] =[
    new Ingredients('Apple',5),
    new Ingredients('Mango',10)
  ];
}
