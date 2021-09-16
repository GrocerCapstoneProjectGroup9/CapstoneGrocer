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

  constructor(public userSer:UserService,public router:Router) { }
  cartitems:Array<Items>=[];
  ngOnInit(): void {
    this.userSer.getItemsFromCart(sessionStorage.getItem('curUserId')).subscribe(result=>{
      this.cartitems=result;
      console.log(this.cartitems)
    });

  }
  gotoHome(){
    this.router.navigate(["user-main",sessionStorage.getItem('curUserId')]);
  }
  placeOrder(){
    this.userSer.placeOrder(this.cartitems,sessionStorage.getItem('curUserId')).subscribe(result=>{
      console.log(result);
    })
    this.userSer.emptyCart(sessionStorage.getItem('curUserId')).subscribe(result=>{
      console.log(result)
    });
    this.router.navigate(["user-main",sessionStorage.getItem('curUserId')])
  }

}
