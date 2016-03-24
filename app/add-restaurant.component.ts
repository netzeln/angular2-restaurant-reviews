import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'add-restaurant',
  outputs: ['newRestaurant'],
  template: `
    <h3>Create a New Restaurant</h3>
      <label>New Restaurant Name:</label>
      <input placeholder="Restaurant Name" type="text" #newRestaurantName required><br>
      <label>Select Restaurant Cuisine:</label>
      <select required #newRestaurantCuisine>
        <option selected disabled>--- Please choose a cuisine ---</option>
        <option value="Mexican">Mexican</option>
        <option value="Italian">Italian</option>
        <option value="French">French</option>
        <option value="American">American</option>
        <option value="Indian">Indian</option>
        <option value="Other">Other</option>
      </select><br>
      <label>New Restaurant Address:</label>
      <input placeholder="Restaurant Address" type="text" #newRestaurantAddress required><br>
      <label>Select Restaurant Cost:</label>
      <select required #newRestaurantCost>
        <option selected disabled>--- Please choose a cost ---</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
        <option value="$$$$$">$$$$$</option>
      </select><br>
      <button (click)="addRestaurant(newRestaurantName, newRestaurantCuisine, newRestaurantAddress, newRestaurantCost)" class="btn btn-success">ADD</button>
  `
})

export class AddRestaurantComponent {
  public newRestaurant: EventEmitter<string[]>;
  constructor(){
    this.newRestaurant = new EventEmitter();
  }
  addRestaurant(inputRestaurantName: HTMLInputElement, selectRestaurantCuisine: HTMLSelectElement, inputRestaurantAddress: HTMLInputElement, selectRestaurantCost: HTMLSelectElement) {
    var restaurantInfo = [inputRestaurantName.value, selectRestaurantCuisine.value, inputRestaurantAddress.value, selectRestaurantCost.value];
    if((inputRestaurantName.value === "") || (selectRestaurantCuisine.value === "") || (inputRestaurantAddress.value === "") || (selectRestaurantCost.value === "")) {
      alert("Please fill out all of the fields before adding a restaurant!");
    } else {
      this.newRestaurant.emit(restaurantInfo);
      inputRestaurantName.value = "";
      selectRestaurantCuisine.value = "";
      inputRestaurantAddress.value = "";
      selectRestaurantCost.value = "";
    }
  }
}
