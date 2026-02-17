import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-server-status',
  imports: [],
  templateUrl: './dashboard-server-status.html',
  styleUrl: './dashboard-server-status.css',
})
export class DashboardServerStatusComponent {
  currentStatus = 'online';
}
