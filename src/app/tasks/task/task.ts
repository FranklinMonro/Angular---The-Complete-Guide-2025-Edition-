import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';

export interface TaskInterface {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: DateTime;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskInterface;
}
