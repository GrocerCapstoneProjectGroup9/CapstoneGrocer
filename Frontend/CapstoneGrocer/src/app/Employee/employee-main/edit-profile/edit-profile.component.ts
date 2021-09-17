import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  result:any;

  //initialize services
  constructor(
    public employee:EmployeeService
  ) { }

  ngOnInit(): void {
  }

  //change temp variables
  changepass(editpass:NgForm){
    let pass = editpass.value.pass;
    let emp = sessionStorage.getItem("activeUser");
    console.log(emp);
    if (emp!=null){
      let empjson = JSON.parse(emp);
      let email = empjson.email;
      this.employee.editpass(pass,email).subscribe();
      this.result = "Password Changed to "+pass;
    }
  }
}
