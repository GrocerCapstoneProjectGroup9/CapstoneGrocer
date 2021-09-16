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

  foundemployee:any;

  defaultPassword:boolean = false;

  msg:any;

  constructor(public router:Router, public employeeservice:EmployeeService) 
  {

  }

  ngOnInit(): void {
  }

  loginEmployee(employeeRef:any)
  {
    let employeeEmail = employeeRef.employeeEmail;
    let employeePassword = employeeRef.employeePassword;

    this.employeeservice.getEmployee(employeeEmail).subscribe(result=>{
      console.log(result[0]);
      this.foundemployee = result[0];

      if(this.foundemployee != undefined){

        if(employeePassword == "defaultpassword")
        {
          this.defaultPassword = true;
        }
        else if(this.foundemployee.password == employeePassword)
        {
          sessionStorage.setItem("activeUser",JSON.stringify(this.foundemployee));
          this.router.navigate(["employeemain"]);
        }
        else
        {
          this.msg = "Invalid password. Try again."
        }
      }
      else
      {
        this.msg = "User with email id " + employeeEmail + " does not exist.";
      }
    });
    
      


  }

  changeEmployeePassword(employeeRef:any)
  {
    let employeeEmail = employeeRef.employeeEmail;
    let employeePassword = employeeRef.employeePassword;

    this.employeeservice.editpass(employeePassword, employeeEmail).subscribe(result =>
    {
      console.log(result);
      this.msg = result;
    });
  }

}
