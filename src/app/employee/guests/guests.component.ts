import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { GuestService } from './../../Service/guest.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { guest } from 'src/app/Models/guest';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
GuestForm: FormGroup;
submitted: boolean;
sub:any;
id:any;
guests: Observable<guest[]>;
  constructor(private fb: FormBuilder, private guestService: GuestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.id = +params.id || 0;

    });
    this.GuestForm = this.fb.group({
      GuestFirstName: new FormControl('', Validators.required),
      GuestLastName: new FormControl('', Validators.required),
      DOB: new FormControl('', Validators.required),
      IdProof: new FormControl('', Validators.required),
      BookingId:new FormControl(this.id)
    }

    );
    this.guests= this.guestService.ShowGuest(this.id);
  }
  get GuestFormControls()
  {
    return this.GuestForm.controls;
  }
  onSubmit()
  {
    this.submitted = true;
    if (this.GuestForm.invalid && this.submitted)
    {
      return;
    }

    this.guestService.AddGuest(this.GuestForm.value).subscribe((data:any)=>
{
if(data!=null)
{
  alert("Guests successfully created");
}
else{
  alert('something went Wrong');
}
},(err:HttpErrorResponse)=>{
  console.log(err.message);

});
  }

}
