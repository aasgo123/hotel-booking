import { Component, OnInit, SecurityContext } from '@angular/core';
import { HotelsService } from 'src/app/Service/hotels.service';
import { Hotel} from 'src/app/Models/Hotel'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle} from '@angular/platform-browser';
import {HotelDisplayComponent} from 'src/app/admin/admin-hotel/hotel-display/hotel-display.component'

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  constructor(private sanitization:DomSanitizer, public service: HotelsService, private route: ActivatedRoute, private member: HotelDisplayComponent, private router: Router) { }
  hotelId: number;
  hotel: Hotel;
  rating: number;
  path: string;
  ngOnInit(): void {
    let id = this.member.returnHotelId();
    this.hotelId = id;
    this.service.refreshList();
    this.hotel = this.service.list.find(h => h.HotelId == this.hotelId);
    this.path = this.sanitization.sanitize(SecurityContext.RESOURCE_URL, this.sanitization.bypassSecurityTrustResourceUrl(this.hotel.HotelImage));
  }

  ratingArray(){
    this.rating = this.hotel.UserRating;
    return Array(this.hotel.HotelTypeId);
  }
  goBack(){
    console.log(this.route.parent.parent);
    this.router.navigate(['../../list'], {relativeTo: this.route});
  }
}
