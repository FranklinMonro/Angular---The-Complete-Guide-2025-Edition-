import { Component } from '@angular/core';
import { InvHeaderComponent } from './inv-header/inv-header';
import { InvUserInputComponent } from './inv-user-input/inv-user-input';
import { InvResultComponent } from './inv-result/inv-result';

@Component({
  selector: 'inv-app',
  imports: [InvHeaderComponent, InvUserInputComponent, InvResultComponent],
  templateUrl: './inv-app.html',
  styleUrls: ['./inv-app.css'],
})
export class InvAppComponent {}
