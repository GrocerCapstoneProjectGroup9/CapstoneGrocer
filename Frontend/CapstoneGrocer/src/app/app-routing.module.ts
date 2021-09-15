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

const routes: Routes = [  
  //main component paths
  {path: '/', redirectTo:'main', component:MainComponent},

  //Admin component paths

  //User component paths

  //Employee component paths
  { path: 'employeemain', component: EmployeeMainComponent},
  { path: 'editprofile', component: EditProfileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'sendrequest', component: SendRequestComponent},
  { path: 'unlockuser', component: UnlockUsersComponent},
  { path: 'updatestatus', component: UpdateOrderStatusComponent},
  {path:"raise-ticket",component:RaiseTicketComponent},
  {path:"user-main",component:UserMainComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
