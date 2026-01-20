import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({ required: true }) userId!: string;

  @Output() closeTask = new EventEmitter<void>();

  enteredTitle: string = '';

  enteredSummary: string = '';

  enteredDate: string | DateTime = '';

  private readonly tasksService: TasksService = inject(TasksService);

  onCancel() {
    this.closeTask.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.userId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: DateTime.fromISO(this.enteredDate as string),
    });
    this.closeTask.emit();
  }
}
