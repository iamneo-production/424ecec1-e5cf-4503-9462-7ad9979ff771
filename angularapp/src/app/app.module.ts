import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { EditpassengerComponent } from './editpassenger/editpassenger.component';
import { DisplayvehicleComponent } from './displayvehicle/displayvehicle.component';
import { UsereditComponent } from './useredit/useredit.component';
import { PassengerlistComponent } from './passengerlist/passengerlist.component';
import { GetvehicleComponent } from './getvehicle/getvehicle.component';
import { GetuserComponent } from './getuser/getuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpassengerComponent,
    EditpassengerComponent,
    DisplayvehicleComponent,
    UsereditComponent,
    PassengerlistComponent,
    GetvehicleComponent,
    GetuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
