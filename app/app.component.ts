import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';



@Component({
  selector: 'my-app',
  directives: [],
  template: `
    <div class="container">
      <h1>Portland Restaurants</h1>
    </div>
  `
})

export class AppComponent {
  public restaurants: Restaurant[];
    constructor(){
      this.restaurants = [
        new Restaurant(["LaBonita", "Mexican", "123 Easy St", "$$"]),
        new Restaurant(["Stammtisch", "German", "546 NE Broadway Ave", "$$$"]),
        new Restaurant(["Le Pigeon", "French", "120 E Burnside St", "$$$$$"]),
        new Restaurant(["Tina's Corner", "American", "1123 122nd St", "$"])
      ]
    }
}
