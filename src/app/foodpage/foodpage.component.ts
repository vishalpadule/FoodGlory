import { Component , OnInit} from '@angular/core';
import { foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
  food!:foods;
  constructor(private activateRoute:ActivatedRoute,
    private foodservice: FoodService , 
    private cartservice: CartService,
    private router:Router) {
      activateRoute.params.subscribe((params)=> {
        if(params['id'])
        this.food = foodservice.getFoodById(params['id'])
      })
    }
      ngOnInit(): void {
        }
        addToCart(){
          this.cartservice.addToCart(this.food);
          this.router.navigateByUrl('/cart-page');
        }
    }
