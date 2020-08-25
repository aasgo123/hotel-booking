import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HotelsService } from 'src/app/Service/hotels.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HotelDisplayComponent} from 'src/app/admin/admin-hotel/hotel-display/hotel-display.component'
import { Hotel } from 'src/app/Models/Hotel';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {

  constructor(public service: HotelsService,
    public toastr: ToastrService, private route: ActivatedRoute,fb:FormBuilder, private router: Router, private member: HotelDisplayComponent) { }
  hotelId: number;
  img: string;
  hotel: Hotel;
  hotelform:FormGroup;
  ngOnInit(): void {
    let id = this.member.returnHotelId();
    this.hotelId = id;
    this.service.refreshList();
    this.hotel = this.service.list.find(h => h.HotelId == this.hotelId);


    this.hotelform = new FormGroup({
HotelId: new FormControl(this.hotelId),
HotelName: new FormControl(this.hotel.HotelName),
City: new FormControl(this.hotel.City),
State: new FormControl(this.hotel.State),
Pincode: new FormControl(this.hotel.Pincode),
Price: new FormControl(this.hotel.Pincode),
StreetAdd: new FormControl(this.hotel.StreetAdd),
HotelTypeId: new FormControl(this.hotel.HotelTypeId),
UserRating: new FormControl(this.hotel.UserRating),
HotelImage: new FormControl(this.hotel.HotelImage)
    });

  }

  populateForm(){

    (<HTMLInputElement>document.getElementById('HotelName')).value = this.hotel.HotelName;
    (<HTMLInputElement>document.getElementById('StreetAdd')).value = this.hotel.StreetAdd;
    (<HTMLInputElement>document.getElementById('City')).value = this.hotel.City;
    (<HTMLInputElement>document.getElementById('State')).value = this.hotel.State;
    (<HTMLInputElement>document.getElementById('Pincode')).value = this.hotel.Pincode.toString();
    (<HTMLInputElement>document.getElementById('Price')).value = this.hotel.Price.toString();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      HotelId: null,
      HotelName: '',
      HotelTypeId: null,
      StreetAdd: '',
      City: '',
      State: '',
      Pincode: null,
      Price: null,
      UserRating: null,
      HotelImage: null
    }
  }

  onSubmit(){

   // if(form.value.HotelImage==''){
    //  form.value.HotelImage = this.hotel.HotelImage;

    //else{
    //REPLACE WITH BASE PATH OF IMAGES FOLDER
      //form.value.HotelImage = 'C:/Images/Hotels/'+this.img;

    this.updateRecord(this.hotelform.value);
  }

  updateRecord(Data:Hotel){

    this.service.putHotel(Data).subscribe(res => {
      this.toastr.info('Record updated successfully','Hotel Update');

      this.service.refreshList();
    });
}

goBack(){
this.router.navigate(['../../list'], {relativeTo: this.route});
}
get hotelControls()
{
  return this.hotelform.controls;
}
handleUpload(event){
  const name = event.target.files[0].name;
  const lastDot = name.lastIndexOf('.');

  const fileName = name.substring(0, lastDot);
  const ext = name.substring(lastDot + 1);
  const path = fileName+'.'+ext;
  this.img = path;
}

}
