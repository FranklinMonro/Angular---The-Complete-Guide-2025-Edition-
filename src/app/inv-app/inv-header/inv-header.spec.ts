import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvHeader } from './inv-header';

describe('InvHeader', () => {
  let component: InvHeader;
  let fixture: ComponentFixture<InvHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
