import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from './employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  //send request
  storerequest(message:any){
    return this.http.post("http://localhost:9090/employee/storerequest",message,{responseType:'text'});
  }

  //update status
  changestatus(status:any){
    return this.http.put("http://localhost:9090/employee/changestatus",status,{responseType:'text'});
  }

  refunduser(orderid:any){
    return this.http.put("http://localhost:9090/employee/refunduser",orderid,{responseType:'text'});
  }

  //unlock user
  unlockuser(user:any){
    return this.http.put("http://localhost:9090/employee/unlockuser",user,{responseType:'text'});
  }

  getaccounts(){
    return this.http.get("http://localhost:9090/employee/getaccounts",'',{responseType:'text'});
  }

  //edit profile
  editpass(pass:any){
    return this.http.put("http://localhost:9090/employee/editpass",pass,{responseType:'text'});
  }
}
