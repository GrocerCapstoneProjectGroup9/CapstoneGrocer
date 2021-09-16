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

  ngOnInit(): void {
  }

  //change the temp names
  sendrequest(requestRef:NgForm){
    let msg = requestRef.value.request;
    let emp = sessionStorage.getItem("activeUser");
    if (emp!=null){
      let empjson = JSON.parse(emp);
      let email = empjson.email;
      this.employee.storerequest(msg,email);
    }
  }

}
