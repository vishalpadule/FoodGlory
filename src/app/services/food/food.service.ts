import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number) : foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
        return [
        {name : 'All' , count : 16 },
        {name : 'FastFood' , count : 11},
        {name : 'Lunch' , count : 5},
        {name : 'pizza' , count : 6},
        {name : 'burger' , count : 3},
        {name : 'pav bhaji' , count : 1},
        {name : 'momos' , count : 1},
        {name : 'manchurian' , count : 1},
        {name : 'periperi' , count : 2},
        {name : 'sandwitch' , count : 2},

    ];
  }

  getAll():foods[]{
    return [
  {
    id: 1,
    price: 99,
    name: 'Cheese Burger',
    favourite: true,
    star: 4.5,
    tags:['FastFood', 'burger' ],
    imageUrl:'/assets/food1.jpg',
    cookTime: '15-30',
    origins: ['Italian'],
  },
      
  {
  id: 2,
  price: 60,
  name: 'Periperi Masala',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'periperi'],
  imageUrl:'/assets/food2.jpg',
  cookTime: '10-20',
  origins: ['Germany US'],
},

{
  id: 3,
  price: 99,
  name: 'Vegeterian pizza',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'Vegeterian Pizza' ,'pizza' ],
  imageUrl:'/assets/food3.jpg',
  cookTime: '30-45',
  origins: ['Persia middle east chaina'],
},

{
  id: 4,
  price: 99,
  name: 'Tomatto pizza',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'Tomatto Pizza', 'pizza'],
  imageUrl:'/assets/food4.jpg',
  cookTime: '30-45',
  origins: ['Germany US'],
},

{
  id: 5,
  price: 110,
  name: ' Pizza With Olive and Sauces',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'Pizza With Olive and Sauces' , 'pizza'],
  imageUrl:'/assets/food5.jpg',
  cookTime: '30-45',
  origins: ['Belgium france india'],
},

{
  id: 6,
  price: 150,
  name: 'Sandwitch with periperi',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'periperi' , 'sandwitch'],
  imageUrl:'/assets/food6.jpg',
  cookTime: '30-45',
  origins: ['Italian'],
},

{
  id: 7,
  price: 120,
  name: 'Fried chicken',
  favourite: true,
  star: 4.5,
  tags:[ 'Fried chicken' , 'Lunch'],
  imageUrl:'/assets/food7.jpg',
  cookTime: '30-45',
  origins: ['Indian'],
},

{
  id: 8,
  price: 100,
  name: 'Chicken Rolls',
  favourite: true,
  star: 4.5,
  tags:[ 'Chicken Rolls' , 'Lunch'],
  imageUrl:'/assets/food8.jpg',
  cookTime: '30-45',
  origins: ['Germany US'],
},

{
  id: 9,
  price: 70,
  name: 'Momos',
  favourite: true,
  star: 4.3,
  tags:[ 'momos' , 'Lunch'],
  imageUrl:'/assets/food9.jpg',
  cookTime: '30-45',
  origins: ['Indian'],
},

{
  id: 10,
  price: 89,
  name: 'Vegeterian sandwitch',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'sandwitch'],
  imageUrl:'/assets/food10.jpg',
  cookTime: '30-45',
  origins: ['Indian'],
},

{
  id: 11,
  price: 120,
  name: 'Chicken Manchurian',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'manchurian'],
  imageUrl:'/assets/food11.jpg',
  cookTime: '30-45',
  origins: ['Indian'],
},

{
  id: 12,
  price: 120,
  name: 'Cheese Pav Bhaji',
  favourite: true,
  star: 4.5,
  tags:[ 'pav bhaji' , 'Lunch'],
  imageUrl:'/assets/food12.jpg',
  cookTime: '30-45',
  origins: ['Indian'],
},

{
  id: 13,
  price: 99,
  name: ' cheeze Burger',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'burger'],
  imageUrl:'/assets/food13.jpg',
  cookTime: '30-45',
  origins: ['Indian'],
},

{
  id: 14,
  price: 120,
  name: 'Chicken Burger',
  favourite: true,
  star: 4.5,
  tags:[ 'burger' , 'Lunch'],
  imageUrl:'/assets/food14.jpg',
  cookTime: '30-45',
  origins: ['Indian'],
},

{
  id: 15,
  price: 110,
  name: 'Capsicum pizza',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'Capsicum Pizza', 'pizza'],
  imageUrl:'/assets/food15.jpg',
  cookTime: '30-45',
  origins: ['Italian'],
},

{
  id: 16,
  price: 150,
  name: 'Magaritta pizza',
  favourite: true,
  star: 4.5,
  tags:['FastFood', 'Magaritta Pizza', 'pizza'],
  imageUrl:'/assets/food16.jpg',
  cookTime: '30-45',
  origins: ['Belgium france india'],
}

     ]
  }
}

