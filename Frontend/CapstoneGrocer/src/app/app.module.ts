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
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { UserMainComponent } from './User/user-main/user-main.component';
import { FundsComponent } from './User/user-main/funds/funds.component';
import { OrderStatusComponent } from './User/user-main/order-status/order-status.component';
import { RaiseTicketComponent } from './User/raise-ticket/raise-ticket.component';
import { ShopComponent } from './User/user-main/shop/shop.component';
import { CartComponent } from './User/user-main/cart/cart.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProfileComponent as UserEditProfileComponent} from './User/user-main/edit-profile/edit-profile.component';
import { SignInComponent as UserSignInComponent } from './User/sign-in/sign-in.component';
import { AdminSignInComponent } from './Admin/admin-sign-in/admin-sign-in.component';
import { AdminMainComponent } from './Admin/admin-main/admin-main.component';

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
    SignUpComponent,
    UserMainComponent,
    FundsComponent,
    OrderStatusComponent,
    RaiseTicketComponent,
    ShopComponent,
    CartComponent,
    UserEditProfileComponent,
    UserSignInComponent,
    AdminSignInComponent,
    AdminMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
