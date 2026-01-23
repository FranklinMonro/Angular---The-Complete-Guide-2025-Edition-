import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from '../tasks.model';
import { TaskCardComponent } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'task-task',
  imports: [DatePipe, TaskCardComponent],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskTaskComponent {
  @Input({ required: true }) task!: Task;

  private readonly tasksService: TasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
