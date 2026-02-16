import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TaskApp } from './task-app/task-app';
import { InvAppComponent } from './inv-app/inv-app';
import { SupAppComponent } from './sup-app/sup-app';

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, TaskApp, InvAppComponent, SupAppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web');
}
