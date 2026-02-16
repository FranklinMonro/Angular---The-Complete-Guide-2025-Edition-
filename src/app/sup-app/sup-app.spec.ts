import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupApp } from './sup-app';

describe('SupApp', () => {
  let component: SupApp;
  let fixture: ComponentFixture<SupApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
