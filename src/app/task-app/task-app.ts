import { Component } from '@angular/core';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'task-app',
  imports: [Header, User, Tasks],
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
