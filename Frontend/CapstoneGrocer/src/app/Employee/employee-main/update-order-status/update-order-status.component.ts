import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  //initialize service
  constructor() { }

  ngOnInit(): void {
  }

  //change temp names
  updateorder(tempform:NgForm){
    let status = tempform.temp;
    this.tempser.changestatus(status);

    if (status == "Cancelled"){
      //obtain the user of the order and refund the amount and reason for cancellation
    }
  }
}
