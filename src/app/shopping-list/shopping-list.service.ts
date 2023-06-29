import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/Ingredients.model";

export class shoppinglistservice{
    IngredientsChanged = new EventEmitter<Ingredients[]>();
    Ingredient : Ingredients[] =[
        new Ingredients('Apple',5),
        new Ingredients('Mango',10)
      ];
    getShoppinglistservice(){
        return this.Ingredient.slice();
    }
    addIngredients(Ingredients : Ingredients){
        this.Ingredient.push(Ingredients);
        this.IngredientsChanged.emit(this.Ingredient.slice());
    }
    DeleteIngredients(Ingredients : Ingredients){
        this.Ingredient.pop();
        this.IngredientsChanged.emit(this.Ingredient.slice());
    }
    // ClearIngredients(Ingredients : Ingredients){
    //     this.Ingredient.length = 0 ;
    //     this.IngredientsChanged.emit();
    // }

}