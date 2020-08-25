import { BookingDetail } from 'src/app/Models/bookinDetails';
import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/Service/booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/Models/booking';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminbooking',
  templateUrl: './adminbooking.component.html',
  styleUrls: ['./adminbooking.component.css']
})
export class AdminbookingComponent implements OnInit {

  constructor(public service: BookingService, private router: Router, private route: ActivatedRoute) { }
bookings: Observable<Booking[]>;
  ngOnInit(): void {

   this.bookings=this.service.refreshList();;
  }
  goBack(){
    this.router.navigate(['../home'], {relativeTo: this.route});
  }
}



