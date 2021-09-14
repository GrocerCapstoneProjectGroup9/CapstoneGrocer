import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  //initialize services
  constructor(
    public employee:EmployeeService
  ) { }

  ngOnInit(): void {
  }

  //change temp variables
  changepass(tempform:NgForm){
    let pass = tempform.temp;
    this.employee.editpass(pass);
  }
}
