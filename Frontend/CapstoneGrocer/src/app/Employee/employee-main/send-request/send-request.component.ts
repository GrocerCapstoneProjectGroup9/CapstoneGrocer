import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
//initialize the service
  constructor(
    public employee:EmployeeService
  ) { }
  
  result="";

  ngOnInit(): void {
  }

  //change the temp names
  sendrequest(requestRef:NgForm){
    let msg = requestRef.value.message;
    let id = requestRef.value.id;
    let amount = requestRef.value.amount;
    let emp = sessionStorage.getItem("activeUser");
    if (emp!=null){
      let empjson = JSON.parse(emp);
      let email = empjson.email;
      console.log(email,id,amount,msg)
      this.employee.storerequest(email,id,amount,msg);
      this.result="Request Sent";
    }
  }

}
