import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookingComponent } from './ebooking.component';

describe('EbookingComponent', () => {
  let component: EbookingComponent;
  let fixture: ComponentFixture<EbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
