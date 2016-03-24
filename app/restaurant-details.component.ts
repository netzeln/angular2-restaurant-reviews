import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  template: `
    <h4>Fine {{restaurant.specialty}} Cuisine</h4>
    <h4>{{restaurant.address}}</h4>
  `

})
export class RestaurantDetailsComponent {
  public restaurant : Restaurant;
}
