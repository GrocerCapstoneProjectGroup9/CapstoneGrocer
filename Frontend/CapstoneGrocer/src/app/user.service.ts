import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'


import { UserMainComponent } from './User/user-main/user-main.component';
import { cartProduct } from './model.cart';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  storeTicketData(data: any): void {
    this.http
      .post('http://localhost:9090/api/ticket/storeTicket', data, { responseType: 'text' })
      .subscribe(
        (result) => {
          console.log(result)
        },
        (error) => console.log(error)
      );
  
}

  saveCartItem(cItem:cartProduct){
      
  }
}