import { HotelsService } from './../../Service/hotels.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/Models/Hotel';
import { DataShareService } from 'src/app/Service/data-share.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {


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
