import { Component, OnInit, SecurityContext } from '@angular/core';
import { HotelsService } from 'src/app/Service/hotels.service';
import { Hotel} from 'src/app/Models/Hotel'
import {RoomDetail} from 'src/app/Models/room-detail'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle} from '@angular/platform-browser';
import {HotelDisplayComponent} from 'src/app/admin/admin-hotel/hotel-display/hotel-display.component';
import {RoomDetailService} from 'src/app/Service/room-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  constructor(private sanitization: DomSanitizer,public service : RoomDetailService,
    public serv: HotelsService, private route: ActivatedRoute, private member: HotelDisplayComponent, private router: Router, public toastr: ToastrService) { }
hotelId: number;
hotel: Hotel;
room: RoomDetail;
path: string;
  ngOnInit(): void {
    let id = this.member.returnHotelId();
    this.hotelId = id;
    this.serv.refreshList();
    this.hotel = this.serv.list.find(h => h.HotelId == this.hotelId);
    this.room = this.service.list.find(r => r.HotelId = this.hotel.HotelId);
    this.path = this.sanitization.sanitize(SecurityContext.RESOURCE_URL, this.sanitization.bypassSecurityTrustResourceUrl(this.room.RoomImage));
  }

}
