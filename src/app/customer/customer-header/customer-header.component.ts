import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  constructor(private route: Router) { }
Email = localStorage.getItem('Email');
  ngOnInit(): void {

  }
logout()
{
  localStorage.removeItem('Token');
  localStorage.removeItem('UserId');
  localStorage.removeItem('Email');
  this.route.navigate(['']);

}
}
