import { Component, signal } from '@angular/core';
import { Header } from './task-app/header/header/header';
import { User } from './task-app/user/user';
import { DUMMY_USERS } from './task-app/user/dummy-users';
import { Tasks } from './task-app/tasks/tasks';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, MatTabsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web');

  users = DUMMY_USERS;

  selectedUserID?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID);
  }

  onSelectUser(selectedID: string) {
    this.selectedUserID = selectedID;
  }
}
