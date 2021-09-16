import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {
  checkoutRef = new FormGroup({
    pid:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required])
  })
  cartcont:number=0;
  
  constructor(public userSer:UserService,
    public router:Router) { }

  ngOnInit(): void {
  }
  
  addtoCart(){
    let itemDetails=this.checkoutRef.value
    this.userSer
    this.cartcont++;
    console.log(this.checkoutRef.value)
    this.userSer.addToCart(itemDetails,sessionStorage.getItem('curUserId')).subscribe(result=>{
      console.log(result);
    })

  }


}
