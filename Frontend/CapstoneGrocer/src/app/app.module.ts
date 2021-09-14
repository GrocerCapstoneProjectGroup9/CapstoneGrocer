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
import { FromsModule, ReactiveFormsModule } from '@angular/forms';

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
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FromsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
