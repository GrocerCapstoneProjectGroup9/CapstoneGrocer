import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  msg:any;

  constructor(public userservice:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  addFunds(fundsRef:any)
  {
    let money = fundsRef.money;
    let id = fundsRef.accountId;
    
    this.userservice.addFunds(money, sessionStorage.getItem('curUserId')).subscribe(result =>
      {
        console.log("Adding funds in the amount of "+money+" to account id: " +sessionStorage.getItem('curUserId')+ ".");
        this.msg = result;
      });
  }
  gotoHome(){
    this.router.navigate(["user-main",sessionStorage.getItem('curUserId')]);
  }

}
