import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
      <h2>{{restaurant.name}}</h2>
  `
})

export class RestaurantDisplayComponent{
  public restaurant: Restaurant;
}
