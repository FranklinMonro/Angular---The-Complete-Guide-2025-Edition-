import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvApp } from './inv-app';

describe('InvApp', () => {
  let component: InvApp;
  let fixture: ComponentFixture<InvApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
