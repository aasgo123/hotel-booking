import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BstatusComponent } from './bstatus.component';

describe('BstatusComponent', () => {
  let component: BstatusComponent;
  let fixture: ComponentFixture<BstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
