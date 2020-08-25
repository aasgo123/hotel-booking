import { Hotel } from './../../Models/Hotel';
import { HotelsService } from './../../Service/hotels.service';
import { DataShareService } from './../../Service/data-share.service';
import { Component, OnInit } from '@angular/core';
import { Search } from 'src/app/Models/Search';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrls: ['./home-hotel.component.css']
})
export class HomeHotelComponent implements OnInit {

  constructor(private dataervice: DataShareService, private hotelService: HotelsService, private route: ActivatedRoute) { }
s: string;
c: string;
sub: any;
hotels: Observable<Hotel[]>;
ngOnInit(): void {
  this.sub = this.route
  .queryParams
  .subscribe(params => {
    // Defaults to 0 if no query param provided.
   this.s = params.search;
   this.c = params.category;

  });




  this.hotels = this.hotelService.SearchHotel(this.s, this.c);
  }

}
