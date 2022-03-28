import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourantdetailsComponent } from './retourantdetails.component';

describe('RetourantdetailsComponent', () => {
  let component: RetourantdetailsComponent;
  let fixture: ComponentFixture<RetourantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourantdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
