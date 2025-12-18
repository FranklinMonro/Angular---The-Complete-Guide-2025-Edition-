import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('web');

  users = DUMMY_USERS;

  onSelectUser(selectedID: string) {
    console.log(`User selected: ${selectedID}`);
  }
}
