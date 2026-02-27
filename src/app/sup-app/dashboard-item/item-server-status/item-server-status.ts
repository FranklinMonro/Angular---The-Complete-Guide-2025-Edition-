import { Component } from '@angular/core';

@Component({
  selector: 'item-server-status',
  imports: [],
  templateUrl: './item-server-status.html',
  styleUrls: ['../../sup-app.css', './item-server-status.css'],
})
export class ItemServerStatusComponent {
  currentStatus = 'online';
}
