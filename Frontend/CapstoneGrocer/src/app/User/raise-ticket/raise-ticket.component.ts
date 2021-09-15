import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  raiseTicketRef = new FormGroup({
    email:new FormControl("",[Validators.required]),
    issue:new FormControl("",[Validators.required])
  })
  msg:string=""
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  raiseTicket() {
    let rtvalues = this.raiseTicketRef.value
    console.log(rtvalues.email);
    console.log(rtvalues.issue)
    this.raiseTicketRef.reset();
  }
}
