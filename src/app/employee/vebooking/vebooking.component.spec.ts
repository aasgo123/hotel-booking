import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VEbookingComponent } from './vebooking.component';

describe('VEbookingComponent', () => {
  let component: VEbookingComponent;
  let fixture: ComponentFixture<VEbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VEbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VEbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
