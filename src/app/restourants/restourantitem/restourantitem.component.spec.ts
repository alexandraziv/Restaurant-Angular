import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantitemComponent } from './restourantitem.component';

describe('RestourantitemComponent', () => {
  let component: RestourantitemComponent;
  let fixture: ComponentFixture<RestourantitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestourantitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourantitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
