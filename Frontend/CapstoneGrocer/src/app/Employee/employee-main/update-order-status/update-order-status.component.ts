import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  result:any[]=[];

  //initialize service
  constructor(
    public employee:EmployeeService
  ) { }

  ngOnInit(): void {
    this.display();
  }

  //display tickets
  display(){
    this.employee.getorders().subscribe(result => {
      for(let i of result){
        this.result.push(i);
      }
    }) 
  }

  //change temp names
  updateorder(order:NgForm){
    let status = order.value.status;
    let id = order.value.id;
    console.log(status,id)
    this.employee.changestatus(status,id);
    //window.location.reload();
  }
}
