import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  //initialize services
  constructor() { }

  ngOnInit(): void {
  }

  //change temp variables
  changepass(tempform:NgForm){
    let pass = tempform.temp;
    this.tempser.editpass(pass);
  }
}
