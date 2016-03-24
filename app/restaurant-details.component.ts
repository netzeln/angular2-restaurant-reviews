import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  template: `
    <h3>Fine {{restaurant.specialty}} Cuisine</h3>
    <h3>{{restaurant.address}}</h3>
    <h3>Average Cost: {{restaurant.expense}}</h3>
  `
})
export class RestaurantDetailsComponent {
  public restaurant : Restaurant;
}
