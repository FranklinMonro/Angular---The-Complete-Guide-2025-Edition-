import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTicketsComponent } from './item-tickets';

describe('DashboardTicketsComponent', () => {
  let component: DashboardTicketsComponent;
  let fixture: ComponentFixture<DashboardTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTicketsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
