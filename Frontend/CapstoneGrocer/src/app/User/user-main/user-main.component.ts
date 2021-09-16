import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from 'src/app/model.item';
import { UserService } from 'src/app/user.service';
import { Item } from '../model.item';
@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {
  checkoutRef = new FormGroup({
    pid:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
    quantity:new FormControl("",[Validators.required])
  })
  cartcont:number=0;
  products:any;
  constructor(public userSer:UserService,
    public router:Router) { }

  ngOnInit(): void {
    this.userSer.getItemsFromCart(sessionStorage.getItem('curUserId')).subscribe(result=>{
      this.cartitems=result;
      console.log(this.cartitems)
      this.cartcont=this.cartitems.length
    });
    this.userSer.getAllProducts().subscribe(result=>{
      this.products=result;
      console.log(this.products[0].name)
    })

    
  }
  cartitems:Array<Items>=[];
  addtoCart(){
    let itemDetails=this.checkoutRef.value
    this.userSer
   
    console.log(this.checkoutRef.value)
    this.userSer.addToCart(itemDetails,sessionStorage.getItem('curUserId')).subscribe(result=>{
      console.log(result);
      window.location.reload()
      
    })
  

  }


}
