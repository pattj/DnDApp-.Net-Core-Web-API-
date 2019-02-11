import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDistributorComponent } from './point-distributor.component';

describe('PointDistributorComponent', () => {
  let component: PointDistributorComponent;
  let fixture: ComponentFixture<PointDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
