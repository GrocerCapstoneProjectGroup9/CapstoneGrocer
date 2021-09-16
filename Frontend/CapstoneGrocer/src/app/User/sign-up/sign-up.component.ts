import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
    fname:new FormControl(),
    lname:new FormControl(),
    phone:new FormControl(),
    address:new FormControl()
  })

  constructor(public loginSer:LoginService) { }
  msg?:string;
  ngOnInit(): void {
  }

  accountCreate() {
    let login = this.loginRef.value;
 
    this.loginSer.loginAccountCreate(login).
    subscribe(result=>this.msg=result,error=>console.log(error));
 
    this.loginRef.reset();
  }

}
