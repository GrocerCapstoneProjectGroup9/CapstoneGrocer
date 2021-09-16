import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {

  result = "";

  constructor(
    public employee:EmployeeService,
  ) { }

  ngOnInit(): void {
  }

  //display locked accounts
  display(){
    this.employee.gettickets().subscribe(result => {
      this.result=result;
    }) 
  }

  //unlock accounts
  unlock(unlockForm:NgForm){
    let email = unlockForm.value.email;
    this.employee.unlockuser(email);
  }
}
