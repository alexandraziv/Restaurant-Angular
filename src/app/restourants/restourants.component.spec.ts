import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantsComponent } from './restourants.component';

describe('RestourantsComponent', () => {
  let component: RestourantsComponent;
  let fixture: ComponentFixture<RestourantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestourantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
