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
    password:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required])
  });
  editAddressRef = new FormGroup({
    address:new FormControl("",[Validators.required])
  });
  editEmailRef = new FormGroup({
    email:new FormControl("",[Validators.required])
  });
  editPhoneRef = new FormGroup({
    phone:new FormControl("",[Validators.required])
  });

  constructor(public userProfile: UserService) { }
  passMsg?:string
  addrMsg?:string
  emailMsg?:string
  phoneMsg?:string
  editPasswordFalg:boolean=false;
  editAddressFlag:boolean=false;
  editEmailFalg:boolean=false;
  editPhoneFlag:boolean=false;

  ngOnInit(): void {
  }

  updatePassword(newPass: any): void{
    console.log(newPass)
    this.userProfile.updatePassword(newPass);
    this.passMsg = 'Password updated'
    this.editPasswordRef.reset()
  }

  updateAddress(newAddress: any): void{
    this.userProfile.updateAddress(newAddress,sessionStorage.getItem('curUserId'));
    this.addrMsg = 'Address updated'
    this.editAddressRef.reset()
  }

  updateEmail(newEmail: any): void{
    this.userProfile.updateEmail(newEmail,sessionStorage.getItem('curUserId'));
    sessionStorage.setItem('curUserId', newEmail.email);
    this.emailMsg = 'Email updated'
    this.editEmailRef.reset()
  }

  updatePhone(newPhone: any): void{
    this.userProfile.updatePhone(newPhone,sessionStorage.getItem('curUserId'));
    this.phoneMsg = 'Phone updated'
    this.editPhoneRef.reset();
  }
  enableEE(){
    this.editAddressFlag=false
    this.editEmailFalg=true
    this.editPasswordFalg=false
    this.editPhoneFlag=false
    this.passMsg="";
    this.addrMsg="";
    this.emailMsg="";
    this.phoneMsg="";

  }
  enableEP(){
    this.editAddressFlag=false
    this.editEmailFalg=false
    this.editPasswordFalg=true
    this.editPhoneFlag=false
    this.passMsg="";
    this.addrMsg="";
    this.emailMsg="";
    this.phoneMsg="";

  }
  enableEA(){
    this.editAddressFlag=true
    this.editEmailFalg=false
    this.editPasswordFalg=false
    this.editPhoneFlag=false
    this.passMsg="";
    this.addrMsg="";
    this.emailMsg="";
    this.phoneMsg="";

  }
  enableEPhone(){
    this.editAddressFlag=false
    this.editEmailFalg=false
    this.editPasswordFalg=false
    this.editPhoneFlag=true
    this.passMsg="";
    this.addrMsg="";
    this.emailMsg="";
    this.phoneMsg="";

  }
}
