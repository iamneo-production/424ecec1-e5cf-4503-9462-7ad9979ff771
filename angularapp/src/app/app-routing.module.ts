import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminreviewlistComponent } from './adminreviewlist/adminreviewlist.component';
import { BookingComponent } from './booking/booking.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { DisplayvehiclesComponent } from './displayvehicles/displayvehicles.component';
import { EditpassengerComponent } from './editpassenger/editpassenger.component';
import { EditreviewComponent } from './editreview/editreview.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { GetuserComponent } from './getuser/getuser.component';
import { GetvehicleComponent } from './getvehicle/getvehicle.component';
import { LoginComponent } from './login/login.component';
import { PassengerlistComponent } from './passengerlist/passengerlist.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewmangementComponent } from './reviewmangement/reviewmangement.component';
import { SignupComponent } from './signup/signup.component';
import { UserbookinglistComponent } from './userbookinglist/userbookinglist.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserreviewlistComponent } from './userreviewlist/userreviewlist.component';
import { VehiclebookinglistComponent } from './vehiclebookinglist/vehiclebookinglist.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userdashboard',component:UserdashboardComponent,pathMatch: 'full'},
  {path:'admindashboard',component:AdminDashboardComponent,pathMatch: 'full'},
  {path:'getvehiclelist',component:VehiclelistComponent,pathMatch:'full'},
  {path:'addvehicle',component:AddvehicleComponent},
  {path:'editvehicle/:id',component:EditvehicleComponent},
  {path:'viewvehicle/:id',component:ViewvehicleComponent},
  {path:'getuserlist',component:UserlistComponent,pathMatch:'full'},
  {path:'edituser/:id',component:EdituserComponent},
  {path:'displayvehicles',component:DisplayvehiclesComponent,pathMatch: 'full'},
  {path:'getvehicle/:id',component:GetvehicleComponent,pathMatch: 'full'},
  {path:'getuser/:email',component:GetuserComponent,pathMatch: 'full'},
  {path:'useredit/:email',component:UsereditComponent,pathMatch: 'full'},
  {path:'addpassenger',component:AddpassengerComponent},
  {path:'passengerlist/:id',component:PassengerlistComponent},
  {path:'editpassenger/:id',component:EditpassengerComponent},
  {path:'booking/:id',component:BookingComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'bookinglist/:id',component:BookinglistComponent},
  {path:'vehiclebookinglist/:id',component:VehiclebookinglistComponent},
  {path:'userbookinglist/:id',component:UserbookinglistComponent},
  {path:'reviewmanagement/:id',component:ReviewmangementComponent},
  {path:'userreviewlist/:id',component:UserreviewlistComponent},
  {path:'adminreviewlist',component:AdminreviewlistComponent},
  {path:'editreview/:id',component:EditreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
