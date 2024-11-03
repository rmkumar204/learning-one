import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[DataService]
})
export class AppComponent implements OnInit {
  title = 'learning-one';
  items:any=[{priceId:1,participantNmae:'ram'},{priceId:2,participantNmae:'ranjith'},{priceId:3,participantNmae:'kannan'},{priceId:4,participantNmae:'raj'}];
  priceWinner:any;
  adminDetails:any=[];
  cartsDetails:any=[];
  constructor(
    private dataServices:DataService,
  ){}
  ngOnInit(): void {
     this.dataServices.getData().subscribe(
      data=>this.adminDetails=data,
      error=>console.log(error)
     );
     this.dataServices.getCarts().subscribe(
      data=>this.cartsDetails=data[0].carts,
      error=>console.log(error)
     );
  }
  showAlert(id:number){
    alert(`clicked ${id}`);
  }
  getWinner($priceId:Number):void{
   for(let item of this.items){
    if(item.priceId === Number($priceId)){
      this.priceWinner=item;
      return;
    }
   } 
  }
}
