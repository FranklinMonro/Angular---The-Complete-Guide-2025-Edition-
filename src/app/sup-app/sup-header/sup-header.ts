import { Component } from '@angular/core';
import { SharedButtonComponent } from '../shared/button/button';

@Component({
  selector: 'sup-header',
  imports: [SharedButtonComponent],
  templateUrl: './sup-header.html',
  styleUrl: './sup-header.css',
})
export class SupHeaderComponent {}
