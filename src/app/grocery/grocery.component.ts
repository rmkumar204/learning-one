import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent {
  constructor(
    private router:ActivatedRoute
  ){
    console.log('details',this.router.snapshot)
  }

}
