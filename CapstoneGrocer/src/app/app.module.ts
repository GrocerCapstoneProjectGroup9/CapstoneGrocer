import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeUpdateOrderComponent } from './employee-update-order/employee-update-order.component';
import { EmployeeUnlockUserComponent } from './employee-unlock-user/employee-unlock-user.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeMainComponent,
    EmployeeSignInComponent,
    EmployeeSendRequestComponent,
    EmployeeUpdateOrderComponent,
    EmployeeUnlockUserComponent,
    EmployeeEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
