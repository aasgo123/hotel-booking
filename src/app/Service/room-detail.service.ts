
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RoomDetail } from '../Models/room-detail';
import { HttpClient } from '@angular/common/http';
import { RoomModel } from '../Models/RoomModel';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailService {

  formData : RoomDetail;
readonly rootURL="https://localhost:44347/api"
  list : RoomDetail[];

  constructor(private http : HttpClient) { }

  postRoomDetail(formData : RoomDetail){
    return this.http.post(this.rootURL+'/RoomDetails',formData);
  }
  ViewRooms( id:number):Observable<RoomDetail[]>
  {
console.log(id);
    return this.http.get<RoomDetail[]>(this.rootURL+'/RoomDetails/ViewRoom/'+id)
  }

  GetRoom(id: number)
  {
    return this.http.get<RoomDetail>(this.rootURL+'/RoomDetails/'+id)
  }

  refreshList(){
    this.http.get(this.rootURL+'/RoomDetails')
    .toPromise().then(res => this.list = res as RoomDetail[]);
  }

  putRoomDetail(formData : RoomDetail){
    return this.http.put(this.rootURL+'/RoomDetails/'+formData.RoomId,formData);
  }

  deleteRoomDetail(id : number){
    return this.http.delete(this.rootURL+'/RoomDetails/'+id);
  }

}
