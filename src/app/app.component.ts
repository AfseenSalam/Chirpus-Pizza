import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/MenuItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChirpusPizza';
  allMenu:MenuItem[] = [{ name: 'Margherita Pizza', category: 'Pizza', price: 10.99, vegetarian: true, soldOut: false },
    { name: 'Pepperoni Pizza', category: 'Pizza', price: 12.99, vegetarian: false, soldOut: false },
    { name: 'BBQ Wings', category: 'Wings', price: 8.99, vegetarian: false, soldOut: false },
    { name: 'Buffalo Wings', category: 'Wings', price: 9.99, vegetarian: false, soldOut: true },
    { name: 'Garden Salad', category: 'Salad', price: 6.99, vegetarian: true, soldOut: false },
    { name: 'Cheese Bread', category: 'Appetizer', price: 5.99, vegetarian: true, soldOut: false }
  ];
  total :number =0;
  CurrentTotal(m:MenuItem):void{
   this.total+=m.price; 

  }
  ResetPressed():void{
    this.total = 0;
  }
}
