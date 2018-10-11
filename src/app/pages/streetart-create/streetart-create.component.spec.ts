import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetartCreateComponent } from './streetart-create.component';

describe('StreetartCreateComponent', () => {
  let component: StreetartCreateComponent;
  let fixture: ComponentFixture<StreetartCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetartCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
