import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipes } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipe!: Recipes;
  @Output() recipeSelected = new EventEmitter<void>();
  onSelect(){
    this.recipeSelected.emit();
  }
}
