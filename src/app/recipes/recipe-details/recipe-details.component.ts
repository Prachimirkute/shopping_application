import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model';
import { receipeservice } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{
  recipe!: Recipes;
  id : number | undefined;

  constructor (private Receipeservice : receipeservice,
    private router : Router, private route :ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
          this.id = +params['id'];
          this.recipe = this.Receipeservice.getRecipe(this.id);
    });
  }
  editRecipes(){
   this.router.navigate(['edit'],{relativeTo : this.route}); 
  //  this.router.navigate(['../'this.id, 'edit'],{relativeTo : this.route});
  }
}
