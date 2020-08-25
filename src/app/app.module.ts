import { AuthInterceptor } from './auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { RegisterComponent } from './Acccount/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerHeaderComponent } from './customer/customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer/customer-footer/customer-footer.component';
import { HotelsComponent } from './customer/hotels/hotels.component';
import { HotelBookingComponent } from './customer/hotel-booking/hotel-booking.component';
import { HomeHotelComponent } from './home/home-hotel/home-hotel.component';

import { BstatusComponent } from './customer/bstatus/bstatus.component';
import { EmployeeComponent } from './employee/employee.component';
import { EHeaderComponent } from './employee/eheader/eheader.component';
import { EFooterComponent } from './employee/efooter/efooter.component';
import { EHotelComponent } from './employee/ehotel/ehotel.component';
import { EbookingComponent } from './employee/ebooking/ebooking.component';
import { GuestsComponent } from './employee/guests/guests.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminHotelComponent } from './admin/admin-hotel/admin-hotel.component';

import { HotelListComponent } from './admin/admin-hotel/hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './admin/admin-hotel/hotel-details/hotel-details.component';
import { HotelAddComponent } from './admin/admin-hotel/hotel-add/hotel-add.component';
import { HotelEditComponent } from './admin/admin-hotel/hotel-edit/hotel-edit.component';
import { HotelsService } from './Service/hotels.service';

import { HotelDisplayComponent } from './admin/admin-hotel/hotel-display/hotel-display.component';
import { RoomListComponent } from './admin/admin-hotel/room-list/room-list.component';
import { RoomAddComponent } from './admin/admin-hotel/room-add/room-add.component';
import { RoomEditComponent } from './admin/admin-hotel/room-edit/room-edit.component';
import { RoomComponent } from './admin/admin-hotel/room/room.component';
import { RoomDisplayComponent } from './admin/admin-hotel/room-display/room-display.component';
import { RoomDetailsComponent } from './admin/admin-hotel/room-details/room-details.component';
import { VEbookingComponent } from './employee/vebooking/vebooking.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    RegisterComponent,
    AdminComponent,
    CustomerComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent,
    HotelsComponent,
    HotelBookingComponent,
    HomeHotelComponent,

    BstatusComponent,

    EmployeeComponent,

    EHeaderComponent,

    EFooterComponent,

    EHotelComponent,

    EbookingComponent,

    GuestsComponent,

    AdminhomeComponent,

    AdminHotelComponent,
    HotelListComponent,
    HotelDetailsComponent,
    HotelAddComponent,
    HotelEditComponent,
    HotelDisplayComponent,
    RoomListComponent,
    RoomAddComponent,
    RoomEditComponent,
    RoomComponent,
    RoomDisplayComponent,
    RoomDetailsComponent,
    VEbookingComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ToastrModule.forRoot(),
    FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




