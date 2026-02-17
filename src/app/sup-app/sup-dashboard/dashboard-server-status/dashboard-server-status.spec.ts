import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServerStatus } from './dashboard-server-status';

describe('DashboardServerStatus', () => {
  let component: DashboardServerStatus;
  let fixture: ComponentFixture<DashboardServerStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardServerStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardServerStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
