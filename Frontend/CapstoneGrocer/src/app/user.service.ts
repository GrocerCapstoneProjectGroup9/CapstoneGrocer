import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'


import { UserMainComponent } from './User/user-main/user-main.component';
import { cartProduct } from './model.cart';
import { Item } from './User/model.item';
import { Login } from './User/login';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  addToCart(item:Item,email:any):Observable<any>{
    return this.http.put('http://localhost:9090/api/user/addItemtoCart/'+email,item,
    {responseType:'text'})
  }
  getItemsFromCart(email:any):Observable<any>{
    console.log(email);
    return this.http.get('http://localhost:9090/api/user/getCartItems/'+email)
  }


  storeTicketData(data: any): Observable<any> {
    return this.http
      .post('http://localhost:9090/api/user/raiseTicket', data, { responseType: 'text' })

  }

  updatePassword(data: any): void {
    this.http
      .post('http://localhost:9090/api/user/updatePassword', data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateEmail(data: any,email:any): Observable<any> {
    return this.http
      .put('http://localhost:9090/api/user/updateUserEmail/'+email, data, {
        responseType: 'text',
      })
  
  }
  updateAddress(data: any,email:any): void {
    this.http
      .put('http://localhost:9090/api/user/updateAddress/'+email, data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          console.log(result)
        },
        (error) => console.log(error)
      );
  }
  updatePhone(data: any,email:any): void {
    this.http
      .put('http://localhost:9090/api/user/updatePhone/'+email, data, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          console.log(result)
        },
        (error) => console.log(error)
      );
  }

  lockUser(login:Login):Observable<any> {
    console.log(login)
    console.log("I am here")
    return this.http.put('http://localhost:9090/api/user/lockUser', login, { responseType: 'text' })
  }

  addFunds(money:any, id:any)
  {
    console.log("Adding funds in the amount of "+money+" to account id: " +id+ ".");
    return this.http.put('http://localhost:9090/api/user/addFunds',{money:money, id:id},{responseType:'text'});
  }
}