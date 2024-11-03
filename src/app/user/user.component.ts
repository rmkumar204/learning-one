import { Component,EventEmitter,inject, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { CommentsComponent } from '../comments/comments.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommentsComponent,NgOptimizedImage,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers:[DataService]
})
export class UserComponent implements OnInit {
@Input() adminDetails=[]
@Input() cartsDetails=[]
@Input() priceWinner:any={}
@Output() getWinner=new EventEmitter<Number>();
name='ram'
age=34
city='chennai'
phone=9443340000
userDetails:any[]=[]
isLoggedIn=true
player:String=''
players:String[]=[]
winnerPriceID:any;
dataImage='assets/images/trees.webp'
constructor(
private dataServices:DataService
){}
ngOnInit():void {
  this.dataServices.getData().subscribe(
    data=>this.userDetails=data,
    error=>console.error('Error fetching data',error)
  );
}
playerName(event:any){
this.player=event.target.value
}
addName(){
this.players.push(this.player)
this.player=''
}
getrandomWinnerId(event:any){
this.winnerPriceID=event.target.value;
}
getWinnerId(){
  this.getWinner.emit(this.winnerPriceID);
}
}
