import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-groceryitems',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './groceryitems.component.html',
  styleUrl: './groceryitems.component.scss'
})
export class GroceryitemsComponent {
groceryItems=[
  {
    productId:'1',
    productName:'Books',
    priceOfItem:50,
    totalPrice:250,
    totalItems:50
  },
  {
    productId:'2',
    productName:'Furnitures',
    priceOfItem:5000,
    totalPrice:50000,
    totalItems:10
  },{
    productId:'3',
    productName:'Cricket Bats',
    priceOfItem:1000,
    totalPrice:50000,
    totalItems:50
  },
]
}
