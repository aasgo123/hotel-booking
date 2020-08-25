import { BookingDetail } from './../../Models/bookinDetails';
import { BookingDetailsService } from './../../Service/booking-details.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {

BookingForm: FormGroup;
 date: Date = new Date();
sub: any;
login:boolean;
id: number;
today=new Date();
bookingDetail: BookingDetail;
constructor(fb: FormBuilder,private toastr:ToastrService,
            private route: ActivatedRoute,
            private router: Router, private booking: BookingDetailsService) {}

ngOnInit() {
      this.sub = this.route
        .queryParams
        .subscribe(params => {
          // Defaults to 0 if no query param provided.
          this.id = +params.id || 0;

        });
      this.BookingForm = new FormGroup({
        HotelId: new FormControl(this.id),
        UserId: new FormControl(localStorage.getItem('UserId')),
          ArrivalDate: new FormControl('', [Validators.required] ),
          DepartureDate: new FormControl('', Validators.required),
          BookingDate: new FormControl(this.date),
          NoOfGuests: new FormControl ('', Validators.required)
        });
      }
get BookingFormControls()
{
  return this.BookingForm.controls;
}
onSubmit()
{
  this.login=true;
  if (this.BookingForm.invalid) {
  return;
  }
  console.log(this.BookingForm.value);
  this.booking.AddBooking(this.BookingForm.value).subscribe((data: any) => {


alert(data);
this.BookingForm.reset(); }

, (err: HttpErrorResponse) => {alert(err.message); });

}
}
