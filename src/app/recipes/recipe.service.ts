import { Ingredients } from "../shared/Ingredients.model";
import { Recipes } from "./recipe.model";

export class receipeservice{

    recipes : Recipes[] =[
        new Recipes ('Testy Schnitzel ',
         'Amazingly Tasty and Crispy Chicken Schnitzel' ,
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
          [new Ingredients ('Meat',1 ),
          new Ingredients ('chicken',2)
        ]),
        new Recipes ('Burger',
         'When life throws you a burger, eat it' , 
         'https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg?crop=0.670xw:1.00xh;0.252xw,0&resize=1200:*',
         [new Ingredients ('Meat',1 ),
         new Ingredients ('chicken',1 )
       ])
      ]
    getRecipes(){
        return this.recipes.slice();
    }
}
