
import { Component, OnInit } from '@angular/core';
import { RoomDetailService } from 'src/app/Service/room-detail.service';
import { ToastrService } from 'ngx-toastr';
import { RoomDetail } from 'src/app/Models/room-detail';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/Models/Hotel';
import { HotelsService } from 'src/app/Service/hotels.service';
import {HotelDisplayComponent} from 'src/app/admin/admin-hotel/hotel-display/hotel-display.component'
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  constructor(public service : RoomDetailService,
    public serv: HotelsService,
    private toastr : ToastrService, private route: ActivatedRoute, private router: Router, private member: HotelDisplayComponent,fb:FormBuilder) { }

    RoomDetail: FormGroup
    hotelId: number;
    img: string;
    room: any;
    roomID:number;
  ngOnInit(): void {
    this.serv.refreshList();
    this.service.refreshList();
    let id = this.member.returnHotelId();
    this.hotelId = id;
    let roomid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.roomID= roomid
    this.room = this.service.GetRoom(this.roomID);

    this.RoomDetail = new FormGroup({
      HotelId: new FormControl(this.hotelId),
      RoomId: new FormControl(this.room.RoomId),
        RoomTypeId: new FormControl(this.room.RoomTypeId, [Validators.required] ),
        Status: new FormControl(this.room.Status, Validators.required),
        Remarks: new FormControl(this.room.Remarks),

      });


  }

  populateForm(){

    (<HTMLInputElement>document.getElementById('Remarks')).value = this.room.Remarks;
    (<HTMLInputElement>document.getElementById('Status')).value = this.room.Status;
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

  onSubmit(){
    this.updateRecord(this.RoomDetail.value);
  }
get RoomDetailControl()
{
  return this.RoomDetail.controls;
}
  updateRecord(room:RoomDetail){

    this.service.putRoomDetail(room).subscribe(res => {
      this.toastr.info('Updated Successfully','Room Detail Register')
     // this.resetForm(room);

      this.service.refreshList();
  });
  }

}
