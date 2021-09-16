import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Employee imports
import { EmployeeMainComponent }  from './Employee/employee-main/employee-main.component';

import { EditProfileComponent } from './Employee/employee-main/edit-profile/edit-profile.component';
import { LogoutComponent } from './Employee/employee-main/logout/logout.component';
import { SendRequestComponent } from './Employee/employee-main/send-request/send-request.component';
import { UnlockUsersComponent } from './Employee/employee-main/unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './Employee/employee-main/update-order-status/update-order-status.component';
import { RaiseTicketComponent } from './User/raise-ticket/raise-ticket.component';
import { UserMainComponent } from './User/user-main/user-main.component';
import { CartComponent } from './User/user-main/cart/cart.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { SignInComponent } from './Employee/sign-in/sign-in.component';
import { EditProfileComponent as UserEditProfileComponent} from './User/user-main/edit-profile/edit-profile.component';
import { SignInComponent as UserSignInComponent } from './User/sign-in/sign-in.component';

const routes: Routes = [  
  //main component paths
  {path: '', component:MainComponent},

  //Admin component paths

  //User component paths
  {path:"raise-ticket",component:RaiseTicketComponent},
  {path:"user-main/:email",component:UserMainComponent},
  {path:"cart",component:CartComponent},
  {path:"user-sign-up", component:SignUpComponent},
  {path:"user-sign-in", component:UserSignInComponent},
  {path:"user-edit-profile", component:UserEditProfileComponent},

  //Employee component paths
  { path: 'employeemain', component: EmployeeMainComponent},
  { path: 'employeesignin', component: SignInComponent},
  { path: 'editprofile', component: EditProfileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'sendrequest', component: SendRequestComponent},
  { path: 'unlockuser', component: UnlockUsersComponent},
  { path: 'updatestatus', component: UpdateOrderStatusComponent},
  {path:"",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
