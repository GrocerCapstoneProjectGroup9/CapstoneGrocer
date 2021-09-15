import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from './employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  //get employee
  getEmployee(email:any):Observable<any>
  {
    return this.http.get("http://localhost:9090/api/employee/getEmployeeByEmail/"+email);
  }

  //send request
  storerequest(message:any){
    return this.http.post("http://localhost:9090/api/employee/storerequest",message);
  }

  //update status
  changestatus(status:any, orderid:any){
    return this.http.put("http://localhost:9090/api/employee/changestatus",{status:status,orderid:orderid});
  }

  //unlock user
  unlockuser(user:any){
    return this.http.put("http://localhost:9090/api/employee/unlockuser",user);
  }

  getaccounts(){
    return this.http.get("http://localhost:9090/api/employee/getaccounts");
  }

  //edit profile
  editpass(pass:any, id:any){
    return this.http.put("http://localhost:9090/api/employee/editpass",{pass:pass, id:id});
  }
}
