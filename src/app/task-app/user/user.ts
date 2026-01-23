import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { type UserInterface } from './user.model';
import { TaskCardComponent } from '../shared/card/card';

@Component({
  selector: 'task-user',
  imports: [TaskCardComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class TaskUserComponent {
  @Input({ required: true }) user!: UserInterface;

  @Input({ required: true }) selected!: boolean;

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
