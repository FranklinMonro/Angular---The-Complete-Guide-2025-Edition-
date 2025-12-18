import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web');

  users = DUMMY_USERS;

  selectedUserID = this.users[0].id;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID);
  }

  onSelectUser(selectedID: string) {
    this.selectedUserID = selectedID;
  }
}
