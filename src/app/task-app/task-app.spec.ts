import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskApp } from './task-app';

describe('TaskApp', () => {
  let component: TaskApp;
  let fixture: ComponentFixture<TaskApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
