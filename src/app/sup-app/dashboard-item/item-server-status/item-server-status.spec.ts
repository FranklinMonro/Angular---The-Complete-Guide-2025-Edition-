import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemServerStatusComponent } from './item-server-status';

describe('ItemServerStatusComponent', () => {
  let component: ItemServerStatusComponent;
  let fixture: ComponentFixture<ItemServerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemServerStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemServerStatusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
