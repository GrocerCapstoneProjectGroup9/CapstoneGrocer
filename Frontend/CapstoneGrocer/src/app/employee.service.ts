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
  unlockuser(email:any){
    return this.http.put("http://localhost:9090/api/employee/unlockuser",email);
  }

  //get user
  gettickets():Observable<any>{
    return this.http.get("http://localhost:9090/api/user/getAllTickets");
  }

  //edit profile
  editpass(pass:any, email:any){
    return this.http.put("http://localhost:9090/api/employee/editpass",{pass:pass, email:email},{
      responseType: 'text',
    })
    .subscribe(
      (result) => {
        console.log(result)
      },
      (error) => console.log(error)
    );
  }
}
