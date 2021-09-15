import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editPasswordRef = new FormGroup({
    newpass:new FormControl("",[Validators.required])
  });
  editAddressRef = new FormGroup({
    newaddress:new FormControl("",[Validators.required])
  });
  editEmailRef = new FormGroup({
    newemail:new FormControl("",[Validators.required])
  });
  editPhoneRef = new FormGroup({
    newphone:new FormControl("",[Validators.required])
  });

  constructor(public userProfile: UserService) { }
  passMsg?:string
  addrMsg?:string
  emailMsg?:string
  phoneMsg?:string

  ngOnInit(): void {
  }

  updatePassword(newPass: any): void{
    this.userProfile.updatePassword(newPass);
    this.passMsg = 'Password updated'
  }

  updateAddress(newAddress: any): void{
    this.userProfile.updateAddress(newAddress);
    this.addrMsg = 'Address updated'
  }

  updateEmail(newEmail: any): void{
    this.userProfile.updateEmail(newEmail);
    this.emailMsg = 'Email updated'
  }

  updatePhone(newPhone: any): void{
    this.userProfile.updatePhone(newPhone);
    this.phoneMsg = 'Phone updated'
  }
}
