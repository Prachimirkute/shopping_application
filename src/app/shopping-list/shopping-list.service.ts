import { Ingredients } from "../shared/Ingredients.model";
import { Subject } from "rxjs";

export class shoppinglistservice{
    IngredientsChanged = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
    private Ingredient : Ingredients[] =[
        new Ingredients('Apple',5),
        new Ingredients('Mango',10)
      ];
    getShoppinglistservice(){
        return this.Ingredient.slice();
    }
    getIngredient(index : number){
        return this.Ingredient[index];
    }
    addIngredients(Ingredients : Ingredients){
        this.Ingredient.push(Ingredients);
        this.IngredientsChanged.next(this.Ingredient.slice());
    }
    DeleteIngredients(Ingredients : Ingredients){
        this.Ingredient.pop();
        this.IngredientsChanged.next(this.Ingredient.slice());
    }
    updatedIngredient(index : number, newIngredients: Ingredients){
        this.Ingredient[index] = newIngredients;
        this.IngredientsChanged.next(this.Ingredient.slice());
    }
    // ClearIngredients(Ingredients : Ingredients){
    //     this.Ingredient.length = 0 ;
    //     this.IngredientsChanged.emit();
    // }
}