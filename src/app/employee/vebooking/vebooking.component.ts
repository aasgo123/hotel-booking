import { BookingDetailsService } from './../../Service/booking-details.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ViewBooking } from 'src/app/Models/ViewBooking';

@Component({
  selector: 'app-vebooking',
  templateUrl: './vebooking.component.html',
  styleUrls: ['./vebooking.component.css']
})
export class VEbookingComponent implements OnInit {

  constructor( private booking : BookingDetailsService) { }
bookings: Observable<ViewBooking[]>
  ngOnInit(): void {
    this.bookings = this.booking.HotelBooking();
  }

}
