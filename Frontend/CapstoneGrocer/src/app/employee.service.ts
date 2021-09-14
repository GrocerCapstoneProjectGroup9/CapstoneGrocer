import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  //send request
  storerequest(message:any){

  }

  //update status
  changestatus(status:any){

  }

  //unlock user
  unlockuser(user:any){

  }

  //edit profile
  editpass(pass:any){

  }
}
