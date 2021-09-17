import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  constructor(public userSer:UserService,public router:Router) { }
  orders:any[]=[]
  ngOnInit(): void {
    this.userSer.getOrderofUser(sessionStorage.getItem('curUserId')).subscribe(result=>{
      //console.log(result);
      this.orders=result;
      console.log(this.orders)
    })
  }

  gotoHome(){
    this.router.navigate(["user-main",sessionStorage.getItem('curUserId')]);
  }
}
