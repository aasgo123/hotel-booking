import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-display',
  templateUrl: './hotel-display.component.html',
  styleUrls: ['./hotel-display.component.css']
})
export class HotelDisplayComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  hotelId: number;
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.hotelId = id;
  }

  public returnHotelId(){
    return this.hotelId;
  }

}
