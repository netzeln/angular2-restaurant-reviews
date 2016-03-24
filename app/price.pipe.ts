//example of a Pipe
import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "expense",
  pure: false
})
export class PricePipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    var desiredPrice = args[0];
    if(desiredPrice === "cheap"){
      return input.filter((restaurant)=> {
        return restaurant.expense.length <= 3;
      })
    }else if (desiredPrice === "fancy"){
      return input.filter((restaurant)=> {
        return restaurant.expense.length >=4;
      })
    }else{
      return input;
    }
  }
}
