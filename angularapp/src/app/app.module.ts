import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DisplayvehiclesComponent } from './displayvehicles/displayvehicles.component';
import { GetvehicleComponent } from './getvehicle/getvehicle.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { GetuserComponent } from './getuser/getuser.component';
import { UsereditComponent } from './useredit/useredit.component';
import { PassengerlistComponent } from './passengerlist/passengerlist.component';
import { BookingComponent } from './booking/booking.component';
import { EditpassengerComponent } from './editpassenger/editpassenger.component';
import { PaymentComponent } from './payment/payment.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { VehiclebookinglistComponent } from './vehiclebookinglist/vehiclebookinglist.component';
import { UserbookinglistComponent } from './userbookinglist/userbookinglist.component';
import { ReviewmangementComponent } from './reviewmangement/reviewmangement.component';
import { UserreviewlistComponent } from './userreviewlist/userreviewlist.component';
import { AdminreviewlistComponent } from './adminreviewlist/adminreviewlist.component';
import { EditreviewComponent } from './editreview/editreview.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UserdashboardComponent,
    AdminDashboardComponent,
    AddvehicleComponent,
    VehiclelistComponent,
    EditvehicleComponent,
    ViewvehicleComponent,
    UserlistComponent,
    EdituserComponent,
    DisplayvehiclesComponent,
    GetvehicleComponent,
    AddpassengerComponent,
    GetuserComponent,
    UsereditComponent,
    PassengerlistComponent,
    BookingComponent,
    EditpassengerComponent,
    PaymentComponent,
    BookinglistComponent,
    VehiclebookinglistComponent,
    UserbookinglistComponent,
    ReviewmangementComponent,
    UserreviewlistComponent,
    AdminreviewlistComponent,
    EditreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
