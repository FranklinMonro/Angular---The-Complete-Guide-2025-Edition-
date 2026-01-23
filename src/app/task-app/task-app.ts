import { Component } from '@angular/core';
import { TaskHeaderComponent } from './header/header';
import { TaskTasksComponent } from './tasks/tasks';
import { TaskUserComponent } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'task-app',
  imports: [TaskHeaderComponent, TaskUserComponent, TaskTasksComponent],
  templateUrl: './task-app.html',
  styleUrl: './task-app.css',
})
export class TaskApp {
  users = DUMMY_USERS;

  selectedUserID?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID);
  }

  onSelectUser(selectedID: string) {
    this.selectedUserID = selectedID;
  }
}
