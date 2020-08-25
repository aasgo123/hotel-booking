import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EHotelComponent } from './ehotel.component';

describe('EHotelComponent', () => {
  let component: EHotelComponent;
  let fixture: ComponentFixture<EHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
