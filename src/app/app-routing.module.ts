import { VEbookingComponent } from './employee/vebooking/vebooking.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestsComponent } from './employee/guests/guests.component';

import { EbookingComponent } from './employee/ebooking/ebooking.component';
import { EHotelComponent } from './employee/ehotel/ehotel.component';
import { EmployeeComponent } from './employee/employee.component';
import { BstatusComponent } from './customer/bstatus/bstatus.component';


import { HomeHotelComponent } from './home/home-hotel/home-hotel.component';

import { HotelBookingComponent } from './customer/hotel-booking/hotel-booking.component';


import { HotelsComponent } from './customer/hotels/hotels.component';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './home/search/search.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './Acccount/register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminbookingComponent } from './admin/adminbooking/adminbooking.component';
import { AdminHotelComponent } from './admin/admin-hotel/admin-hotel.component';
import { HotelListComponent } from './admin/admin-hotel/hotel-list/hotel-list.component';
import { HotelAddComponent } from './admin/admin-hotel/hotel-add/hotel-add.component';
import { HotelDisplayComponent } from './admin/admin-hotel/hotel-display/hotel-display.component';
import { HotelDetailsComponent } from './admin/admin-hotel/hotel-details/hotel-details.component';
import { HotelEditComponent } from './admin/admin-hotel/hotel-edit/hotel-edit.component';
import { RoomComponent } from './admin/admin-hotel/room/room.component';
import { RoomListComponent } from './admin/admin-hotel/room-list/room-list.component';
import { RoomAddComponent } from './admin/admin-hotel/room-add/room-add.component';
import { RoomDetailsComponent } from './admin/admin-hotel/room-details/room-details.component';
import { RoomEditComponent } from './admin/admin-hotel/room-edit/room-edit.component';



// tslint:disable-next-line: max-line-length
const routes: Routes = [{path: '', component: HomeComponent, children: [{path: '', component: SearchComponent}, {path: 'Hotel', component: HomeHotelComponent}]}, {path: 'Register', component: RegisterComponent},
{path: 'Customer', component: CustomerComponent, canActivate: [AuthGuard],
 children: [{path: '', component: HotelsComponent}, {path: 'Book', component: HotelBookingComponent},
 {path: 'View', component: BstatusComponent}
 ]}, {path: 'Employee', component: EmployeeComponent, canActivate: [AuthGuard],
 children: [{path: '', component: EHotelComponent},
 // tslint:disable-next-line: max-line-length
 {path: 'EBook', component: EbookingComponent}, {path: 'guest', component: GuestsComponent}, {path: 'ViewBook', component: VEbookingComponent}]}, {
  path: 'Admin',
  component: AdminComponent, canActivate: [AuthGuard],
  children: [
    {path: '', component: AdminhomeComponent},
    {path: 'home', component: AdminhomeComponent},
    {path: 'booking', component: AdminbookingComponent},
    {
      path: 'hotel',
      component: AdminHotelComponent,
      children: [
        {path: '', component: HotelListComponent},
        {path: 'list', component: HotelListComponent},
        {path: 'add', component: HotelAddComponent},
        {
          path: ':id',
          component: HotelDisplayComponent,
          children:  [
            {path: '', component: HotelDetailsComponent},
            {path: 'details', component: HotelDetailsComponent},
            {path: 'edit', component: HotelEditComponent},
            {
              path: 'room',
              component: RoomComponent,
              children: [
                {path: '', component: RoomListComponent},
                {path: 'list', component: RoomListComponent},
                {path: 'add', component: RoomAddComponent},
                {path: 'details/:id', component: RoomDetailsComponent},
                {path: 'edit/:id', component: RoomEditComponent}
              ]
            }
          ]
        }
      ]
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
