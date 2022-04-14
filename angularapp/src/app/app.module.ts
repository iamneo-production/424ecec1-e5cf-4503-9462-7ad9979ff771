import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewmanagementComponent } from './reviewmanagement/reviewmanagement.component';
import { EditreviewComponent } from './editreview/editreview.component';
import { AdminreviewlistComponent } from './adminreviewlist/adminreviewlist.component';
import { UserreviewlistComponent } from './userreviewlist/userreviewlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewmanagementComponent,
    EditreviewComponent,
    AdminreviewlistComponent,
    UserreviewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
