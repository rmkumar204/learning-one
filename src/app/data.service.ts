import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userDetails='assets/user.json'
  private cartsDetails='assets/carts.json'
  
  constructor(
    private http:HttpClient
  ) { }
  getData():Observable<any[]>{
    return this.http.get<any[]>(this.userDetails)
  }
  getCarts():Observable<any[]>{
    return this.http.get<any[]>(this.cartsDetails);
  }
}
