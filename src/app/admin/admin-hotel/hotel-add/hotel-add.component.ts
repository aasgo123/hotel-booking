import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HotelsService } from 'src/app/Service/hotels.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
  constructor(public service: HotelsService,
    public toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

    img: string;
  ngOnInit(): void {
    this.resetForm();
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

  onSubmit(form:NgForm){
    //REPLACE WITH BASE PATH OF IMAGES FOLDER
    form.value.HotelImage = 'D:/Images/Hotels/'+this.img;
    if(form.value.HotelId == null)
      this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
this.service.postHotel(form.value).subscribe(res => {
  this.toastr.success('Record added successfully','Hotel Add');
  this.resetForm(form);
  this.service.refreshList();
});
  }

  updateRecord(form:NgForm){
    this.service.putHotel(form.value).subscribe(res => {
      this.toastr.info('Record updated successfully','Hotel Update');
      this.resetForm(form);
      this.service.refreshList();
    });
}

goBack(){
this.router.navigate(['../list'], {relativeTo: this.route});
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
