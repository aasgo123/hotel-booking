import { Hotel } from 'src/app/Models/Hotel';
import { SearchComponent } from './../home/search/search.component';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../Models/Search';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  url = 'https://localhost:44347/api/Hotels';
  constructor( private http: HttpClient)
  {
  }


  getAllHotel(): Observable<Hotel[]> {

    return this.http.get<Hotel[]>(this.url );  }

  SearchHotel(search: string,Cat:string):Observable<Hotel[]>
    {
  return this.http.get<Hotel[]>(this.url + '/SearchHotel/'+search+'/'+Cat);
    }

  formData: Hotel;
  list: Hotel[];
  readonly rootURL = "https://localhost:44347/api";



  postHotel(formData: Hotel){
    return this.http.post(this.rootURL+'/Hotels', formData);
  }
  GetHotel(id:number){
    return this.http.get<Hotel>(this.rootURL+'Hotels/'+id);
  }
  refreshList(){
    this.http.get(this.rootURL+'/Hotels')
    .toPromise().then(res => this.list = res as Hotel[]);
  }

  putHotel(formData: Hotel){
    console.log(formData);
    return this.http.put(this.rootURL+'/Hotels/'+formData.HotelId, formData);
  }

  deleteHotel(id: number){
    return this.http.delete(this.rootURL+'/Hotels/'+id);
  }


}
