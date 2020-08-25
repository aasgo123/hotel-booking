import { Component, OnInit } from '@angular/core';
import { RoomDetailService } from 'src/app/Service/room-detail.service';
import { ToastrService } from 'ngx-toastr';
import { RoomDetail } from 'src/app/Models/room-detail';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/Models/Hotel';
import { HotelsService } from 'src/app/Service/hotels.service';
import {HotelDisplayComponent} from 'src/app/admin/admin-hotel/hotel-display/hotel-display.component'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  constructor(public service : RoomDetailService,
    public serv: HotelsService,
    private toastr : ToastrService, private route: ActivatedRoute, private router: Router, private member: HotelDisplayComponent) { }
    hotelId: number;
    img: string;
    room: RoomDetail;

  ngOnInit(): void {
    this.resetForm();
    this.serv.refreshList();
    this.service.refreshList();
    let id = this.member.returnHotelId();
    this.hotelId = id;
    this.room.HotelId = this.hotelId;
  }

  resetForm(form? : NgForm){
    if (form!=null)
    form.resetForm();
    this.service.formData ={
      RoomId : null,
      HotelId : null,
      RoomTypeId : null,
      Status : '',
    RoomImage : '',
    Remarks : ''
    }
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
  }

  insertRecord(form : NgForm){
    this.service.postRoomDetail(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully','Room Detail Register')
      this.resetForm(form)
      this.service.refreshList();
    });
  }
}
