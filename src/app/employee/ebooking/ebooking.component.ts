import { ViewBooking } from './../../Models/ViewBooking';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookingDetail } from 'src/app/Models/bookinDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetailsService } from 'src/app/Service/booking-details.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ebooking',
  templateUrl: './ebooking.component.html',
  styleUrls: ['./ebooking.component.css']
})
export class EbookingComponent implements OnInit {
  BookingForm: FormGroup;
  date: Date = new Date();
 sub: any;
 login: boolean;
 id: number;
 bookings: Observable<ViewBooking[]>;
 bookingDetail: BookingDetail;
 constructor(fb: FormBuilder,
             private route: ActivatedRoute,
             private router: Router, private booking: BookingDetailsService) {}
today = new Date();
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
   this.login = true;
   if (this.BookingForm.invalid) {
   return;
   }
   console.log(this.BookingForm.value);
   this.booking.AddBooking(this.BookingForm.value).subscribe((data: any) => {


 alert(data); }

 , (err: HttpErrorResponse) => {alert(err.message); });

}

}
