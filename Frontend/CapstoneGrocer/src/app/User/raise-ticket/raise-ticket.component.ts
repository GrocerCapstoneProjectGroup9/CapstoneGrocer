import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  ticketRef = new FormGroup({
    email:new FormControl("",[Validators.required]),
    issue:new FormControl("",[Validators.required])
  });

  // inside constructor goes something like: public ticketService: UsersService
  constructor(public userSer: UserService,router:Router) { }
  msg?:string
  formflag:boolean=false;
  ngOnInit(): void {
  }

  raiseTicket(){
    this.userSer.storeTicketData(this.ticketRef.value).subscribe(result=>{
      console.log(result);
      if(result=="TickedAdded"){
        this.formflag=true;
        this.msg="Your Ticket Has been Submited Please Try After ticket resolved"
      }
    })
  }

}
