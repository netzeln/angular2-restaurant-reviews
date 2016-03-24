import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';
import {RestaurantDisplayComponent} from './restaurant-display.component';
import {RestaurantDetailsComponent } from './restaurant-details.component';
import {PricePipe} from './price.pipe';
import {AddRestaurantComponent} from './add-restaurant.component';
import {EditRestaurantComponent} from './edit-restaurant.component';

@Component ({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  pipes: [PricePipe],
  directives: [RestaurantDisplayComponent, RestaurantDetailsComponent, AddRestaurantComponent, EditRestaurantComponent],
  template: `
    <div class="col-md-6">
      <label>Filter Restaurants by cost:</label>
      <select (change)="onChangeExpense($event.target.value)">
        <option value="all">$-$$$$$</option>
        <option value="cheap">$$$ or Less</option>
        <option value="fancy">$$$$ or More</option>
      </select>
      <div *ngFor="#currentRestaurant of restaurantList | expense: filterExpense">
        <restaurant-display (click)="restaurantClicked(currentRestaurant)" [class.selected]="currentRestaurant === selectedRestaurant" [restaurant]="currentRestaurant">
        </restaurant-display>
        <restaurant-details *ngIf="currentRestaurant === selectedRestaurant" [restaurant]="currentRestaurant">
        </restaurant-details>
        <edit-restaurant *ngIf="currentRestaurant === selectedRestaurant" [restaurant]="currentRestaurant"></edit-restaurant>
      </div>
    </div>
    <div class="col-md-6">
      <add-restaurant (newRestaurant)="addRestaurant($event)"></add-restaurant>
    </div>
  `
})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  public filterExpense: string = "all";
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
  onChangeExpense(filterPrice){
    this.filterExpense = filterPrice;
  }
  addRestaurant(restaurantDetails: string[]): void {
    this.restaurantList.push(
      new Restaurant(restaurantDetails)
    );
  }
  editRestaurant
}
