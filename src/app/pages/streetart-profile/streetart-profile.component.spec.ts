import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetartProfileComponent } from './streetart-profile.component';

describe('StreetartProfileComponent', () => {
  let component: StreetartProfileComponent;
  let fixture: ComponentFixture<StreetartProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetartProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetartProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
