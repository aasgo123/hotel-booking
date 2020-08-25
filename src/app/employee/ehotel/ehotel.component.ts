import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HotelsService } from 'src/app/Service/hotels.service';
import { DataShareService } from 'src/app/Service/data-share.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/Models/Hotel';

@Component({
  selector: 'app-ehotel',
  templateUrl: './ehotel.component.html',
  styleUrls: ['./ehotel.component.css']
})
export class EHotelComponent implements OnInit {


  SearchForm:FormGroup;


  constructor(private hotelService: HotelsService,private fb: FormBuilder,private dataservice:DataShareService,private route: Router) { }
hotels: Observable<Hotel[]>;
  ngOnInit(): void {

    this.SearchForm = this.fb.group({

      Name: new FormControl(''),

      List: new FormControl('')


     } );
     this.hotels= this.hotelService.getAllHotel();
  }
OnSubmit()
{
  this.hotels = this.hotelService.SearchHotel(this.SearchForm.value.Name, this.SearchForm.value.List);
}


}
