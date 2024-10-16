import { Component , Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodpagetags?: string[];

  tags:Tag[] = []; 
  constructor( private fs: FoodService){ }


  ngOnInit(): void {
    if(!this.foodpagetags)
    this.tags = this.fs.getAllTag();
      
  }

}
