import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvResult } from './inv-result';

describe('InvResult', () => {
  let component: InvResult;
  let fixture: ComponentFixture<InvResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
