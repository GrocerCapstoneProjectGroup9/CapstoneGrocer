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
      th