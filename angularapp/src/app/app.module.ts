import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { UserbookinglistComponent } from './userbookinglist/userbookinglist.component';
import { VehiclebookinglistComponent } from './vehiclebookinglist/vehiclebookinglist.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookinglistComponent,
    UserbookinglistComponent,
    VehiclebookinglistComponent,
    AddvehicleComponent,
    AdmindashboardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
