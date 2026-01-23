import { Component, inject, Input } from '@angular/core';
import { TaskNewTaskComponent } from './new-task/new-task';
import { TasksService } from './tasks.service';
import { TaskTaskComponent } from './task/task';

@Component({
  selector: 'task-tasks',
  imports: [TaskNewTaskComponent, TaskTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TaskTasksComponent {
  @Input({ required: true }) userId!: string;

  @Input({ required: true }) name!: string;

  isAddingTask: boolean = false;

  private readonly tasksService: TasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
