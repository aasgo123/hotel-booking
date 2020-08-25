import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/Service/hotels.service';
import { Hotel} from 'src/app/Models/Hotel'
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  term: any;
  constructor(public service: HotelsService,
    public toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(hotel: Hotel){
    this.service.formData = Object.assign({},hotel);
  }

  onDelete(id: number){
    if(confirm('Are you sure you want to delete this record?')){
    this.service.deleteHotel(id).subscribe(res=>{
      this.toastr.warning('Record deleted successfully','Hotel Delete');
      this.service.refreshList();
    });
  }
  }

  viewDetails(id: number){
    this.router.navigate(['../'+id+'/details'], {relativeTo: this.route});
  }

  editDetails(id: number){
    this.router.navigate(['../'+id+'/edit'], {relativeTo: this.route});
  }

  add(){
    this.router.navigate(['../add'], {relativeTo: this.route});
  }
  roomDetails(id: number){
    this.router.navigate(['/Admin/hotel/'+id+'/room/list'])
  }

  addRoom(id: number){
    this.router.navigate(['./'+id+'/room/add'], {relativeTo:this.route})
  }

  goBack(){
    console.log(this.route.parent.parent);
    this.router.navigate(['../../home'], {relativeTo: this.route});
  }
}
