import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/employee.model';
import { EmployeeService } from 'src/app/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  defaultPassword:boolean = false;

  foundEmployee:any;

  constructor(public router:Router, public employeeservice:EmployeeService) 
  {

  }

  ngOnInit(): void {
  }

  loginEmployee(employeeRef:any)
  {
    let employeeEmail = employeeRef.employeeEmail;
    let employeePassword = employeeRef.employeePassword;

    this.foundEmployee = this.employeeservice.getEmployee(employeeEmail);

    console.log(this.foundEmployee.subscribe((res: { data: any; }) => console.log(res.data)));

  }

  changeEmployeePassword(data:any)
  {

  }

}
