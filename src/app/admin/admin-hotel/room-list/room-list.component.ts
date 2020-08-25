
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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room-detail-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(public service : RoomDetailService,
    public serv: HotelsService, private route: ActivatedRoute, private member: HotelDisplayComponent, private router: Router, public toastr: ToastrService) { }

  hotelList:Hotel[];
  hotelId: number;
  hotel: Hotel;
  rating: number;
  path: string;
  room: Observable<RoomDetail[]>;

  ngOnInit(): void {
    let id = this.member.returnHotelId();
    this.hotelId = id;
    this.serv.refreshList();
    this.hotel = this.serv.list.find(h => h.HotelId == this.hotelId);
   this.room= this.service.ViewRooms(this.hotelId);
    //this.service.list.forEach(r => r.HotelId = this.hotel.HotelId,this.room);
  }

  viewDetails(id: number){
    this.router.navigate(['../details',id],{relativeTo:this.route});
  }

  editDetails(id: number){
    this.router.navigate(['../edit',id],{relativeTo:this.route});
  }

  onDelete(id : number){
    if(confirm('Are you sure to delete this Record?')){
    this.service.deleteRoomDetail(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully','Room Detail Register')
      this.service.refreshList();
  });
  }

  }
}
