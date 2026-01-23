import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TaskApp } from './task-app/task-app';
import { InvApp } from './inv-app/inv-app/inv-app';

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, TaskApp, InvApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web');
}
