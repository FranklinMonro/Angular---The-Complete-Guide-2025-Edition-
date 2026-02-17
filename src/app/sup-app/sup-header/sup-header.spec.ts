import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupHeader } from './sup-header';

describe('SupHeader', () => {
  let component: SupHeader;
  let fixture: ComponentFixture<SupHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
