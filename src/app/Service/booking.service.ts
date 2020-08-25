import { Injectable } from '@angular/core';
import { Booking } from '../Models/booking';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  formData: Booking
  list: Booking[]
  readonly rootURL = "https://localhost:44347/api";

  constructor(private http: HttpClient) { }

  postBooking(formData: Booking){
    return this.http.post(this.rootURL+'/BookingDetails', formData);
  }

  refreshList():Observable<Booking[]>{
    return this.http.get<Booking[]>(this.rootURL+'/BookingDetails')

  }

  putBooking(formData: Booking){
    return this.http.put(this.rootURL+'/BookingDetails/'+formData.BookingId, formData);
  }

  deleteBooking(id: number){
    return this.http.delete(this.rootURL+'/BookingDetails/'+id);
  }
}
