import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Ticket } from 'src/app/model.ticket';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {

  result:Ticket[]=[];

  constructor(
    public employee:EmployeeService,
  ) { }

  ngOnInit(): void {
    this.display();
  }

  //display tickets
  display(){
    this.employee.gettickets().subscribe(result => {
      for(let i of result){
        this.result.push(i);
      }
    }) 
  }

  //unlock accounts
  unlock(unlockForm:NgForm){
    let email = unlockForm.value.email;
    this.employee.unlockuser(email);
    window.location.reload();
  }
}
