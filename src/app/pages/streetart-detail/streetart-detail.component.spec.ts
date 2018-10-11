import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetartDetailComponent } from './streetart-detail.component';

describe('StreetartDetailComponent', () => {
  let component: StreetartDetailComponent;
  let fixture: ComponentFixture<StreetartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetartDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
