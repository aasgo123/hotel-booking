import { DataShareService } from './../../Service/data-share.service';
import { Hotel } from '../../Models/Hotel';
import { HotelsService } from '../../Service/hotels.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchForm:FormGroup;


  constructor(private hotelService: HotelsService,private fb: FormBuilder,private dataservice:DataShareService,private route: Router) { }
hotels: Observable<Hotel[]>;
  ngOnInit(): void {

    this.SearchForm = this.fb.group({

      Name: new FormControl(''),

      List: new FormControl('')


     } );
  }
OnSubmit()
{
  this.dataservice.SearchString=this.SearchForm.value.Name;
  this.dataservice.SearchCategory=this.SearchForm.value.List;
  alert(this.SearchForm.value.Name);
  // tslint:disable-next-line: no-unused-expression
  this.route.navigate(['Hotel'],{queryParams: {search:this.SearchForm.value.Name, category:this.SearchForm.value.List}});
}
}
