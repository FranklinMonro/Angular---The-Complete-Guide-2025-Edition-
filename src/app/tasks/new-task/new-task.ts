import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';
import { type TaskAdd } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancelTask = new EventEmitter<void>();

  @Output() addTask = new EventEmitter<TaskAdd>();

  enteredTitle: string = '';

  enteredSummary: string = '';

  enteredDate: string | DateTime = '';

  onCancel() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: DateTime.fromISO(this.enteredDate as string),
    });
  }
}
