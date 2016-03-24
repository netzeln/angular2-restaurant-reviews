import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';
import {RestaurantDisplayComponent} from './restaurant-display.component';
import {RestaurantDetailsComponent } from './restaurant-details.component';

@Component ({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  directives: [RestaurantDisplayComponent, RestaurantDetailsComponent],
  template: `
    <div class="col-md-6">
      <div *ngFor="#currentRestaurant of restaurantList">
        <restaurant-display (click)="restaurantClicked(currentRestaurant)" [class.selected]="currentRestaurant === selectedRestaurant" [restaurant]="currentRestaurant">
        </restaurant-display>
        <restaurant-details *ngIf="currentRestaurant === selectedRestaurant" [restaurant]="currentRestaurant">
        </restaurant-details>
      </div>
    </div>
  `
})

export class RestaurantListComponent {
  public restaurantsList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
}
