import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from './recipe.model';
import { Router } from '@angular/router';
import { receipeservice } from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [receipeservice]
})

export class RecipesComponent implements OnInit{

  @Output() newrecipe = new EventEmitter<void>();
  constructor(private router: Router) { }
  ngOnInit(){
  }
}
