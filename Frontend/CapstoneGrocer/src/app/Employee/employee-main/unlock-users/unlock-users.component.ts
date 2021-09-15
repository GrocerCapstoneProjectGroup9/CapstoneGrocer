import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-unlock-users',
  template: '<div>{{result}}<div>'
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
    this.result=this.employee.getaccounts();
    
  }

  //unlock accounts
  unlock(tempform:NgForm){
    let id = tempform.temp;
    this.employee.unlockuser(id);
  }
}
