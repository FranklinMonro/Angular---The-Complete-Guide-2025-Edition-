import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvUserInput } from './inv-user-input';

describe('InvUserInput', () => {
  let component: InvUserInput;
  let fixture: ComponentFixture<InvUserInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvUserInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvUserInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
