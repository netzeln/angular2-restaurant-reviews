import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';
import {RestaurantListComponent} from './restaurant-list.component';
// import {RestaurantDisplayComponent} from './restaurant-display.component';
// import {RestaurantDetailsComponent } from './restaurant-details.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <div class="row">
        <h1>Portland Restaurants</h1>
        <restaurant-list [restaurantList]="restaurants" (onRestaurantSelect)="restaurantWasSelected($event)"></restaurant-list>
      </div>
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
    restaurantWasSelected(clickedRestaurant: Restaurant): void {
      console.log(clickedRestaurant);
    }
}
