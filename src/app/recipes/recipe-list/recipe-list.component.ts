import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes : Recipes[] =[
    new Recipes ('A test ', 'the description of image ' , 'https://b2958125.smushcdn.com/2958125/wp-content/uploads/2014/11/South-indian-style-chettinad-urlai-roast-potato-roast-recipe-1-3.jpg?lossy=1&strip=1&webp=1'),
    new Recipes ('A test 2', 'the description of image ' , 'https://b2958125.smushcdn.com/2958125/wp-content/uploads/2014/11/South-indian-style-chettinad-urlai-roast-potato-roast-recipe-1-3.jpg?lossy=1&strip=1&webp=1')
  ]

}
