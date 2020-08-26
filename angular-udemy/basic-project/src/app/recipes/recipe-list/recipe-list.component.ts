import { Component, OnInit } from '@angular/core';

// This is coming from the recipe model ts and has to be the same class name
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // This is instantiating a new class from the Recipe model ts which can be used for the template
  // recipes is the name of the property. Recipe[] is a strict way of telling to only
  // get Recipe component of an array, nothing else. The information here will be passed to
  // the newely instantiated Recipe class and you have access to its name, description and image.
  // Think of it similar to this.state and consturctor of React.
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636' ),
    new Recipe('A Test Recipe', 'this is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
