import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../Service/booking.service';
import { Booking } from 'src/app/Models/booking';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  bookingCount: number;
  bookings: Observable<Booking[]>
  constructor(public service: BookingService) { }
ngOnInit(): void {
    this.service.refreshList();
    var count = 10;



}
}
