import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetartCardComponent } from './streetart-card.component';

describe('StreetartCardComponent', () => {
  let component: StreetartCardComponent;
  let fixture: ComponentFixture<StreetartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
