import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/model.item';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public userSer:UserService,public roter:Router) { }
  cartitems:Array<Items>=[];
  ngOnInit(): void {
    this.userSer.getItemsFromCart(sessionStorage.getItem('curUserId')).subscribe(result=>{
      this.cartitems=result;
      console.log(this.cartitems)
    });

  }
  

}
