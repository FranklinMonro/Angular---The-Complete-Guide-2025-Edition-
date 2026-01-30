import { Component } from '@angular/core';
import { InvHeaderComponent } from './inv-header/inv-header';
import { InvUserInputComponent } from './inv-user-input/inv-user-input';

@Component({
  selector: 'inv-app',
  imports: [InvHeaderComponent, InvUserInputComponent],
  templateUrl: './inv-app.html',
  styleUrl: './inv-app.css',
})
export class InvAppComponent {}
