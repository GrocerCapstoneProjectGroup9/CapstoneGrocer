import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  msg:any;

  constructor(public userservice:UserService) { }

  ngOnInit(): void {
  }

  addFunds(fundsRef:any)
  {
    let money = fundsRef.money;
    let id = fundsRef.accountId;

    this.userservice.addFunds(money, id).subscribe(result =>
      {
        console.log("Adding funds in the amount of "+money+" to account id: " +id+ ".");
        this.msg = result;
      });
  }

}
