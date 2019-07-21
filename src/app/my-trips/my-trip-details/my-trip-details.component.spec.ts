import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripDetailsComponent } from './my-trip-details.component';

describe('MyTripDetailsComponent', () => {
  let component: MyTripDetailsComponent;
  let fixture: ComponentFixture<MyTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTripDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
