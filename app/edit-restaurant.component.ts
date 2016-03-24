import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  template:`
  <h3>Edit Restaurant</h3>
    <label>Edit Restaurant Name:</label>
    <input [(ngModel)]="restaurant.name"/><br>
    <label>Edit Restaurant Cuisine:</label>
    <select [(ngModel)]="restaurant.specialty">
      <option selected disabled>--- Please choose a cuisine ---</option>
      <option value="Mexican">Mexican</option>
      <option value="Italian">Italian</option>
      <option value="French">French</option>
      <option value="American">American</option>
      <option value="Indian">Indian</option>
      <option value="Other">Other</option>
    </select><br>
    <label>Edit Restaurant Address:</label>
    <input [(ngModel)]="restaurant.address"/><br>
    <label>Select Restaurant Cost:</label>
    <select [(ngModel)]="restaurant.expense">
      <option value="$">$</option>
      <option value="$$">$$</option>
      <option value="$$$">$$$</option>
      <option value="$$$$">$$$$</option>
      <option value="$$$$$">$$$$$</option>
    </select>
  `
})
export class EditRestaurantComponent{
  public restaurant: Restaurant;
}
