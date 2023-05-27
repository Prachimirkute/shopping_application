import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipe.model';
import { receipeservice } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
@Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes : Recipes[] | undefined;
  constructor (private Receipeservice : receipeservice){}
  
  ngOnInit() {
    this.recipes = this.Receipeservice.getRecipes()
  }
  onselect(recipe : Recipes){
    this.recipeWasSelected.emit(recipe);
  }

}
