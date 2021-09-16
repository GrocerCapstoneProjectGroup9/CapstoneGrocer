import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  //route to admin sign in page
  admin(){
    this.router.navigate(["adminsignin"]);
  }
   //route to admin sign in page
  employee(){
    this.router.navigate(["employeesignin"]);
  }
   //route to admin sign in page
  user(){
    this.router.navigate(["user-sign-in"]);
  }
}
