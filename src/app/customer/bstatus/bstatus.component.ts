import { ViewBooking } from './../../Models/ViewBooking';
import { BookingDetail } from './../../Models/bookinDetails';
import { Observable } from 'rxjs';
import { BookingDetailsService } from './../../Service/booking-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bstatus',
  templateUrl: './bstatus.component.html',
  styleUrls: ['./bstatus.component.css']
})
export class BstatusComponent implements OnInit {
date = new Date();
  constructor(private bookingService: BookingDetailsService) { }
bookings: Observable<ViewBooking[]>
  ngOnInit(): void {
this.bookings = this.bookingService.HotelBooking();

  }

}
