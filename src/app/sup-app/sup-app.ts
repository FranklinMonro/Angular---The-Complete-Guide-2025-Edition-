import { Component } from '@angular/core';
import { SupHeaderComponent } from './sup-header/sup-header';
import { DashboardServerStatusComponent } from './sup-dashboard/dashboard-server-status/dashboard-server-status';
import { DashboardTrafficComponent } from './sup-dashboard/dashboard-traffic/dashboard-traffic';
import { DashboardTicketsComponent } from './sup-dashboard/dashboard-tickets/dashboard-tickets';
import { DashboardItemComponent } from './sup-dashboard/dashboard-item/dashboard-item';

@Component({
  selector: 'sup-app',
  imports: [
    SupHeaderComponent,
    DashboardItemComponent,
    DashboardServerStatusComponent,
    DashboardTrafficComponent,
    DashboardTicketsComponent,
  ],
  templateUrl: './sup-app.html',
  styleUrl: './sup-app.css',
})
export class SupAppComponent {}
