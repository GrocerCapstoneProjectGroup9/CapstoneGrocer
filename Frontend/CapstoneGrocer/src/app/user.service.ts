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

  updatePassword(data: any): void {
    this.http
      .put('http://localhost:9090/api/updateUserPassword/', data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateEmail(data: any): void {
    this.http
      .put('http://localhost:9090/api/updateUserEmail/', data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          console.log(result)
        },
        (error) => console.log(error)
      );
  }
  updateAddress(data: any): void {
    this.http
      .put('http://localhost:9090/api/updateUserAddress/', data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          console.log(result)
        },
        (error) => console.log(error)
      );
  }
  updatePhone(data: any): void {
    this.http
      .put('http://localhost:9090/api/updateUserPhone/', data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          console.log(result)
        },
        (error) => console.log(error)
      );
  }

  savaCartItem(cItem:cartProduct){
    
  }
}
