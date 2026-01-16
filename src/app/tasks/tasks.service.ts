import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { TaskAdd } from './tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: DateTime.fromISO('2025-12-31'),
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: DateTime.fromISO('2024-05-31'),
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: DateTime.fromISO('2024-06-15'),
    },
  ];

  constructor() {
    const taskLocalStorage = localStorage.getItem('tasks');
    if (taskLocalStorage) {
      this.tasks = JSON.parse(taskLocalStorage);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(userId: string, taskData: TaskAdd) {
    const newTask = {
      id: DateTime.now().toISOTime().toString(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
