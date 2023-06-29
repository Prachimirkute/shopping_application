import { Component, ElementRef, ViewChild } from '@angular/core';
import { receipeservice } from '../recipe.service';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-new-recipes',
  templateUrl: './new-recipes.component.html',
  styleUrls: ['./new-recipes.component.css']
})
export class NewRecipesComponent {
  // @ViewChild('nameInput')nameInputRef!: ElementRef;
  // @ViewChild('DesciptionInput')amountInputRef!: ElementRef; 
  // @ViewChild('DesciptionInput')amountInputRef!: ElementRef; 
 //  @Output() IngredientsAdd = new EventEmitter<Ingredients>();
 //  @Output() IngredientsDelete = new EventEmitter<Ingredients>();
  constructor( private receipelistservice :receipeservice ){}
  addRecipes(){
    // console.log("hello");
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Recipes(ingName);
    // this.IngredientsAdd.emit(newIngredient);
    // this.receipelistservice.addRecipes(receipeservice); 
  }
}
