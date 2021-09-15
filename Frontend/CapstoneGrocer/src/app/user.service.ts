import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserMainComponent } from './User/user-main/user-main.component';
import { cartProduct } from './model.cart';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  savaCartItem(cItem:cartProduct){
    
  }
}
