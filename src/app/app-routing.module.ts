import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationManagerComponent } from './registration-manager/registration-manager.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { PendingStatusComponent } from './pending-status/pending-status.component';
import { StatusComponent } from './status/status.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';


const routes: Routes = [
  {path:"login",component:ManagerLoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"registration",component:RegistrationManagerComponent},
  {path:"dashBoard",component:DashBoardComponent},
  {path:"adminDetails", component:AdminDetailsComponent},
  {path:"pendingStatus", component:PendingStatusComponent},
  {path:"status",component:StatusComponent},
  {path:"profilePicture",component:ProfilePictureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
