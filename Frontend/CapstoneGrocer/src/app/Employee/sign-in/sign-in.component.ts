import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { employee } from 'src/app/employee.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  defaultPassword:boolean = false;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  loginEmployee(employeeRef:any)
  {
    let employeeId = employeeRef.employeeId;
    let employeePassword = employeeRef.employeePassword;



  }

  changeEmployeePassword(data:any)
  {

  }

}
