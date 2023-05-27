import { Ingredients } from "../shared/Ingredients.model";

export class Recipes {
    public name: string;
    public description: string;
    public imagePath: string;
    public Ingredient : Ingredients[] | undefined;

    constructor(name: string, desc: string, imagePath: string, Ingredient : Ingredients[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.Ingredient = Ingredient;
    }
}