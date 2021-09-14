import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //display locked accounts
  display(){

  }

  //unlock accounts
  unlock(tempform:NgForm){
    
  }
}
