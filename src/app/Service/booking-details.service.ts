import { ViewBooking } from './../Models/ViewBooking';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingDetail } from '../Models/bookinDetails';
import { LoginDetails } from '../Models/loginDetails';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {
  rooturl = 'https://localhost:44347';
  constructor(private http: HttpClient) { }


  AddBooking(bookingDetail: BookingDetail)
  {
    const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('Token').toString()});
   return this.http.post<BookingDetail>(this.rooturl + '/api/BookingDetails', bookingDetail);

  }

 HotelBooking(): Observable<ViewBooking[]>
 {
return this.http.get<ViewBooking[]>(this.rooturl+ '/api/BookingDetails/ViewBooking/'+localStorage.getItem('UserId'));
 }
}
