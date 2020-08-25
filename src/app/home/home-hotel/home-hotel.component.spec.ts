import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHotelComponent } from './home-hotel.component';

describe('HomeHotelComponent', () => {
  let component: HomeHotelComponent;
  let fixture: ComponentFixture<HomeHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
