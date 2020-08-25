import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eheader',
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.css']
})
export class EHeaderComponent implements OnInit {

  constructor(private route: Router) { }
  logout()
  {
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');
    localStorage.removeItem('Email');
    this.route.navigate(['']);

  }
  ngOnInit(): void {
  }

}
