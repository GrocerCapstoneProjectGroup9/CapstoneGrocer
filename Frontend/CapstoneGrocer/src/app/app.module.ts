import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './Employee/sign-in/sign-in.component';
import { EmployeeMainComponent } from './Employee/employee-main/employee-main.component';
import { SendRequestComponent } from './Employee/employee-main/send-request/send-request.component';
import { UpdateOrderStatusComponent } from './Employee/employee-main/update-order-status/update-order-status.component';
import { UnlockUsersComponent } from './Employee/employee-main/unlock-users/unlock-users.component';
import { EditProfileComponent } from './Employee/employee-main/edit-profile/edit-profile.component';
import { LogoutComponent } from './Employee/employee-main/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RaiseTicketComponent } from './User/raise-ticket/raise-ticket.component';
import { UserMainComponent } from './User/user-main/user-main.component';
import { CartComponent } from './User/user-main/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignInComponent,
    EmployeeMainComponent,
    SendRequestComponent,
    UpdateOrderStatusComponent,
    UnlockUsersComponent,
    EditProfileComponent,
    LogoutComponent,
    RaiseTicketComponent,
    UserMainComponent,
    CartComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
