//example of a 'master' Class
export class Restaurant {
  // public reviews = ____[]
  public name: string;
  public specialty: string;
  public address: string;
  public expense: string
  constructor(public restaurantDetails: string[]){
    this.name = restaurantDetails[0];
    this.specialty = restaurantDetails[1];
    this.address = restaurantDetails[2];
    this.expense = restaurantDetails[3];
  }
}
