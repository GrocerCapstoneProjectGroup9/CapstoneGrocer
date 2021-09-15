import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
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
  constructor() { }

  ngOnInit(): void {
  }
  doCheckout(){
    this.cartcont++;
    console.log(this.checkoutRef.value)
  }

}
