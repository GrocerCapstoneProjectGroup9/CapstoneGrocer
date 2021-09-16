import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  ticketRef = new FormGroup({
    email:new FormControl("",[Validators.required]),
    reason:new FormControl("",[Validators.required])
  });

  // inside constructor goes something like: public ticketService: UsersService
  constructor(public ticket: UserService) { }
  msg?:string

  ngOnInit(): void {
  }

  sendTicket(data:any){
    if(data.email != "" && data.reason != ""){
      this.msg="Ticket sent";
      // inside users service goes a function called storeTicketData that posts to a path in the backend using data
      this.ticket.storeTicketData(data);
    }else{
      this.msg="Enter correct user ID and a reason for your ticket";
    }
    
  }

}
