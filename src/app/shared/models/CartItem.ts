import { foods } from "./food";

export class CartItem {
forEach: any;
  static food: any;
constructor(food:foods){
    this.food = food;
}

food: foods;
quantity : number = 1;
get price(): number{
    return this.food.price * this.quantity;
}
}