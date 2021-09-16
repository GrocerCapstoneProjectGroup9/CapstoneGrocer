import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(public loginSer:LoginService,public userSer:UserService,
    public router:Router) { }
    msg?:string
    logincount:number=0;

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    //console.log(login);
    this.loginSer.checkLoginDetails(login).
    subscribe(result=>{
      if(result=="Success"){
        
        this.msg = "Sign in successful";
        sessionStorage.setItem('curUserId', login.email);
        this.router.navigate(["user-main",login.email]);
      }else {
          this.msg = result;
          this.logincount++;
          console.log(this.logincount);
          console.log(sessionStorage.getItem('curUserId'))
        
            this.userSer.lockUser(login)
          
      }
    },
    error=>console.log(error));
    this.loginRef.reset();
  }

}
