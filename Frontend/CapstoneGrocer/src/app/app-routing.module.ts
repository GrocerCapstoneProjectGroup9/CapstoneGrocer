import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Emloyee imports
import { EmployeeMainComponent }  from './Employee/empoloyee-main/employee-main.component';
import { EditProfileComponent } from './Employee/employee-main/edit-profile/edit-profile.component';
import { LogoutComponent } from './Employee/employee-main/logout/logout.component';
import { SendRequestComponent } from './Employee/employee-main/send-request/send-request.component';
import { UnlockUsersComponent } from './Employee/employee-main/unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './Employee/employee-main/update-order-status/update-order-status.component';


const routes: Routes = [  
  //main component paths

  //Admin component paths

  //User component paths

  //Employee component paths
  { path: 'employeemain', component: EmployeeMainComponent},
  { path: 'editprofile', component: EditProfileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'sendrequest', component: SendRequestComponent},
  { path: 'unlockuser', component: UnlockUsersComponent},
  { path: 'updatestatus', component: UpdateOrderStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
