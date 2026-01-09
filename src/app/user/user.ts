import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

export interface UserInterface {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserInterface;

  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  get randomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
