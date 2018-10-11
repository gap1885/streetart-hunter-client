import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetartListComponent } from './streetart-list.component';

describe('StreetartListComponent', () => {
  let component: StreetartListComponent;
  let fixture: ComponentFixture<StreetartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
