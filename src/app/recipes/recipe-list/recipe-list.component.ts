import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Teokbokki', 'Hello this is a test', 'https://th.bing.com/th/id/R.cea6ebae16981ce250abc2e2b91ffd06?rik=Qx6NPQylNYokAw&pid=ImgRaw&r=0&sres=1&sresct=1'),
    new Recipe('Teokbokki 2', 'Hello this is another test', 'https://th.bing.com/th/id/R.cea6ebae16981ce250abc2e2b91ffd06?rik=Qx6NPQylNYokAw&pid=ImgRaw&r=0&sres=1&sresct=1')
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
