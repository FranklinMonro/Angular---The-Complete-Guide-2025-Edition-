import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) id!: string;

  @Input({ required: true }) avatar!: string;

  @Input({ required: true }) name!: string;

  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  get randomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    this.selectUser.emit(this.id);
  }
}
