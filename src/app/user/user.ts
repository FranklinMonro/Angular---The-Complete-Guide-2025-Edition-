import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = DUMMY_USERS[this.randomIndex];

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  get randomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }
}
