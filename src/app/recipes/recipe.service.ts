import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tteokbokki', 
            'The korean tradition is in this plate', 
            'https://th.bing.com/th/id/R.cea6ebae16981ce250abc2e2b91ffd06?rik=Qx6NPQylNYokAw&pid=ImgRaw&r=0&sres=1&sresct=1', 
            [
                new Ingredient('cups (750 mL) anchovy stock (from stock powder) or water',3 ),
                new Ingredient('tablespoons gochujang (red chili paste)', 3),
                new Ingredient('tablespoon gochugaru (red chili pepper flakes)', 1),
                new Ingredient('tablespoon soy sauce', 1)
            ]),
        new Recipe(
            'Jjajangmyeon', 
            'Taste it once and you will never stop', 
            'https://i.ytimg.com/vi/F4Cm75Qvk4A/maxresdefault.jpg', 
        [
            new Ingredient('cup of Korean radish (or daikon)',1),
            new Ingredient('cup of zucchini, cut into ½ inch cubes',1),
            new Ingredient('cup of potato, peeled and cut into ½ inch cubes',1),
            new Ingredient('cup of onion chunks',1)
        ])
      ]; 

    constructor(private slService: ShoppingListService) {

    }  

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}