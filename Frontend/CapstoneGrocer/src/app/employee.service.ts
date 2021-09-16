import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from './employee.model'
import { Login } from './User/login';

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
    return this.http.post("http://localhost:9090/api/employee/storerequest",{message:message});
  }

  //update status
  changestatus(status:any, orderid:any){
    return this.http.put("http://localhost:9090/api/employee/changestatus",{status:status,orderid:orderid});
  }

  //unlock user
  unlockuser(email:any){
    return this.http.put("http://localhost:9090/api/employee/unlockuser",{email:email},{
      responseType: 'text',
    })
    .subscribe(
      (result) => {
        console.log(result)
      },
      (error) => console.log(error)
    );
  }

  //get tickets
  gettickets():Observable<any>{
    return this.http.get("http://localhost:9090/api/user/getAllTickets");
  }

  //get orders
  getorders():Observable<any>{
    return this.http.get("http://localhost:9090/api/user/getAllOrders");
  }

  //edit profile
  editpass(pass:any, email:any){
    return this.http.put("http://localhost:9090/api/employee/editpass",{pass:pass, email:email},{
      responseType: 'text',
    })

    
  }

  storeEmployee(login:Login):Observable<any>{
      return this.http.post("http://localhost:9090/api/employee/addEmployee",login,
      {responseType:'text'});
    


  }
}
