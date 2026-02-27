import { Component } from '@angular/core';

@Component({
  selector: 'server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrls: ['../../sup-app.css', './server-status.css'],
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
