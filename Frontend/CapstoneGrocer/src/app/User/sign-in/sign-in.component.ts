import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginRef = new FormGroup({
    userid:new FormControl(),
    password:new FormControl()
  });

  constructor(public loginSer:LoginService,
    public router:Router) { }
    msg?:string

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    //console.log(login);
    this.loginSer.checkLoginDetails(login).
    subscribe(result=>{
      if(result=="Success"){
        // this.router.navigate(["home",login.email]);
        this.msg = "Sign in successful";
      }else {
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.loginRef.reset();
  }

}
