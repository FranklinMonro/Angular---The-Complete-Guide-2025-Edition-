import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTraffic } from './dashboard-traffic';

describe('DashboardTraffic', () => {
  let component: DashboardTraffic;
  let fixture: ComponentFixture<DashboardTraffic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTraffic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTraffic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
