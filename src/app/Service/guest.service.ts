import { Observable } from 'rxjs';
import { guest } from './../Models/guest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }
  rooturl = 'https://localhost:44347';
AddGuest(guests: guest)
{
  const reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('Token').toString()});
  return this.http.post(this.rooturl + '/api/Guests', guests);
}

ShowGuest(id: number):Observable<guest[]>
{
  return this.http.get<guest[]>(this.rooturl+'/api/Guests/GetGuests/'+id);

}
}
