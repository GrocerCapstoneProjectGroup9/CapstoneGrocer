import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  addEmployeeRef = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
  });
  deleteEmployeeRef = new FormGroup({
    email:new FormControl("",[Validators.required])
  });

  constructor(public empProfile: EmployeeService) { }
  addMsg?:string
  delMsg?:string
  addEmployeeFlag:boolean=false;
  deleteEmployeeFlag:boolean=false;

  ngOnInit(): void {
  }

  addEmployee(newEmpl: any): void{
    // let login = this.addEmployeeRef.value;
 
    this.empProfile.storeEmployee(newEmpl).
    subscribe(result=>this.addMsg=result,error=>console.log(error));
 
    this.addEmployeeRef.reset();
  }

  // delEmployee(empl: any): void{
  //   this.empProfile.removeEmployee(empl);
  //   this.addMsg = 'Employee deleted';
  //   this.addEmployeeRef.reset();

  //   // this.empProfile.storeEmployee(newEmployee).subscribe(
  //   //   (result) => {
  //   //     if(result=="emailUpdated"){
  //   //       this.addMsg = 'Employee added'
  //   //     }
  //   //     else{
  //   //       this.addMsg='Employee not added'
  //   //     }
  //   //   },
  //   //   (error) => console.log(error)
  //   // );
   
  //   // this.addEmployeeRef.reset()
  // }

  enableAE(){
    this.addEmployeeFlag=true
    this.deleteEmployeeFlag=false
    this.addMsg="";
    this.delMsg="";
  }

  enableDE(){
    this.addEmployeeFlag=false
    this.deleteEmployeeFlag=true
    this.addMsg="";
    this.delMsg="";
  }

}
