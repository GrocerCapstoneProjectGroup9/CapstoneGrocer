import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  ticketRef = new FormGroup({
    userid:new FormControl(),
    reason:new FormControl()
  });

  // inside constructor goes something like: public ticketService: UsersService
  constructor() { }
  msg?:string

  ngOnInit(): void {
  }

  sendTicket(data:any){
    if(data.userid != "" && data.reason != ""){
      this.msg="Ticket sent";
      // inside users service goes a function called storeTicketData that posts to a path in the backend using data
      // this.ticketService.storeTicketData(data);
    }else{
      this.msg="Enter correct user ID and a reason for your ticket";
    }
    
  }

}
